import config from '@payload-config';
import {
  careerCategories,
  careerJobs,
  careerLocations,
  getCareerJobById,
  getCareerJobs
} from '@/data/career';
import { JOB_PAGE_SIZE } from '@/utils/constants';
import type { Category, Job, JobParams, Location, Pagable } from '@/utils/types';
import { getPayload, type Where } from 'payload';

const hasPayloadConfig = () =>
  Boolean(process.env.DATABASE_URL && process.env.PAYLOAD_SECRET);

type PayloadRelation =
  | null
  | string
  | number
  | { id: string | number; name?: null | string };
type PayloadMedia = null | string | number | { url?: null | string };

type PayloadJob = {
  id: string | number;
  title?: null | string;
  slug?: null | string;
  summary?: null | string;
  description?: null | string;
  requirements?: null | string;
  location?: PayloadRelation;
  category?: PayloadRelation;
  image?: PayloadMedia;
  createdAt?: null | string;
};

const relationToOption = (relation?: PayloadRelation): Location | Category | undefined => {
  if (!relation) return undefined;

  if (typeof relation === 'object') {
    return {
      id: String(relation.id),
      name: relation.name || String(relation.id)
    };
  }

  return {
    id: String(relation),
    name: String(relation)
  };
};

const getMediaUrl = (media?: PayloadMedia) => {
  if (!media || typeof media !== 'object') return undefined;
  return media.url;
};

const mapPayloadJob = (job: PayloadJob): Job => {
  const description = [job.description, job.requirements]
    .filter(Boolean)
    .join('\n\n');

  return {
    id: job.slug || String(job.id),
    position: job.title || 'Untitled role',
    content: job.summary || undefined,
    description: description || job.summary || '',
    location: relationToOption(job.location),
    category: relationToOption(job.category),
    image: getMediaUrl(job.image) ? { url: getMediaUrl(job.image) as string } : undefined,
    createdAt: job.createdAt || new Date().toISOString()
  };
};

const mapPagination = <T>({
  data,
  limit,
  page,
  totalDocs,
  totalPages
}: {
  data: T[];
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
}): Pagable<T> => ({
  data,
  pagination: {
    page,
    pageSize: limit,
    total: totalDocs,
    totalPages
  }
});

export const getPayloadLocations = async (): Promise<Location[]> => {
  if (!hasPayloadConfig()) {
    return careerLocations;
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'locations',
    limit: 100,
    sort: 'name',
    where: {
      isActive: {
        equals: true
      }
    }
  });

  return result.docs.map((location) => ({
    id: String(location.id),
    name: location.name,
    address: location.address || undefined
  }));
};

export const getPayloadCategories = async (): Promise<Category[]> => {
  if (!hasPayloadConfig()) {
    return careerCategories;
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'categories',
    limit: 200,
    sort: 'name',
    where: {
      isActive: {
        equals: true
      }
    }
  });

  return result.docs.map((category) => ({
    id: String(category.id),
    name: category.name
  }));
};

export const getPublishedJobs = async (
  params: JobParams
): Promise<Pagable<Job>> => {
  if (!hasPayloadConfig()) {
    return getCareerJobs(params);
  }

  const limit = params.limit ?? JOB_PAGE_SIZE;
  const page = params.page ?? 1;
  const andFilters: Where[] = [
    {
      status: {
        equals: 'published'
      }
    }
  ];

  if (params.locationId) {
    andFilters.push({
      location: {
        equals: params.locationId
      }
    });
  }

  if (params.categoryId) {
    andFilters.push({
      category: {
        equals: params.categoryId
      }
    });
  }

  if (params.search?.trim()) {
    const search = params.search.trim();
    andFilters.push({
      or: [
        {
          title: {
            like: search
          }
        },
        {
          summary: {
            like: search
          }
        }
      ]
    });
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'jobs',
    depth: 1,
    limit,
    page,
    sort: ['sortOrder', '-publishedAt'],
    where: {
      and: andFilters
    }
  });

  return mapPagination({
    data: result.docs.map((job) => mapPayloadJob(job)),
    limit,
    page,
    totalDocs: result.totalDocs,
    totalPages: result.totalPages
  });
};

export const getPublishedJobBySlug = async (
  slug: string
): Promise<Job | undefined> => {
  if (!hasPayloadConfig()) {
    return getCareerJobById(slug);
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'jobs',
    depth: 1,
    limit: 1,
    where: {
      and: [
        {
          slug: {
            equals: slug
          }
        },
        {
          status: {
            equals: 'published'
          }
        }
      ]
    }
  });

  const [job] = result.docs;
  return job ? mapPayloadJob(job) : undefined;
};

export const getStaticJobParams = () =>
  careerJobs.map((job) => ({ id: job.id }));
