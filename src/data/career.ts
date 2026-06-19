import { JOB_PAGE_SIZE } from '@/utils/constants';
import type { Category, Job, JobParams, Location, Pagable } from '@/utils/types';

export const careerLocations: Location[] = [
  { id: 'vietnam-hcm', name: 'Vietnam - HCM' },
  { id: 'vietnam-hn', name: 'Vietnam - HN' },
  { id: 'global', name: 'Global' },
  { id: 'thailand', name: 'Thailand' },
  { id: 'romania', name: 'Romania' },
  { id: 'india', name: 'India' },
  { id: 'sweden', name: 'Sweden' }
];

const departments = ['Development', 'QA/QC', 'BA', 'Art', 'BO', 'Legal', 'PM', 'OPS'];
const levels = [
  'Fresher',
  'Junior',
  'Middle',
  'Senior',
  'Leader',
  'Manager',
  'Head',
  'Director',
  'C-level'
];

export const careerCategories: Category[] = departments.flatMap((department) =>
  levels.map((level) => ({
    id: `${department}-${level}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: `${department} - ${level}`
  }))
);

export const careerJobs: Job[] = [];

export const getCareerJobById = (id: string): Job | undefined =>
  careerJobs.find((job) => job.id === id);

export const getCareerJobs = ({
  limit = JOB_PAGE_SIZE,
  page = 1,
  search = '',
  locationId = '',
  categoryId = ''
}: JobParams): Pagable<Job> => {
  const normalizedSearch = search.trim().toLowerCase();
  const filteredJobs = careerJobs.filter((job) => {
    const matchesSearch =
      !normalizedSearch ||
      job.position.toLowerCase().includes(normalizedSearch) ||
      job.location?.name.toLowerCase().includes(normalizedSearch) ||
      job.category?.name.toLowerCase().includes(normalizedSearch);
    const matchesLocation = !locationId || job.location?.id === locationId;
    const matchesCategory = !categoryId || job.category?.id === categoryId;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  const start = (page - 1) * limit;
  const data = filteredJobs.slice(start, start + limit);

  return {
    data,
    pagination: {
      page,
      pageSize: limit,
      totalPages: Math.ceil(filteredJobs.length / limit),
      total: filteredJobs.length
    }
  };
};
