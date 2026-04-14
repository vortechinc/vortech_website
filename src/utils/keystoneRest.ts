import { JOB_PAGE_SIZE } from './constants';
import { Category, Job, JobParams, Location, Pagable } from './types';

export const fetchKeystone = async <T>(
  endpoint: string,
  url = `${process.env.NEXT_PUBLIC_KEYSTONE_URL}`,
  options: RequestInit = {}
): Promise<T> => {
  const rest = await fetch(`${url}/api/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  });
  if (!rest.ok) {
    const errorText = await rest.text();
    throw new Error(
      `Keystone API request failed: ${rest.status} ${rest.statusText} - ${errorText}`
    );
  }
  const data = await rest.json();
  return data;
};

export const getJobs = (
  params: JobParams,
  url?: string
): Promise<Pagable<Job>> => {
  const queryParams = new URLSearchParams({
    limit: (params.limit ?? JOB_PAGE_SIZE).toString(),
    page: (params.page ?? 1).toString(),
    search: params.search || '',
    locationId: params.locationId || '',
    categoryId: params.categoryId || ''
  }).toString();
  const endpoint = `jobs?${queryParams}`;
  return fetchKeystone<Pagable<Job>>(endpoint, url);
};

export const getJobById = (id: string): Promise<Job> =>
  fetchKeystone<Job>(`jobs/${id}`);

export const getCategories = (): Promise<Category[]> =>
  fetchKeystone<Category[]>('categories');

export const getLocations = (): Promise<Location[]> =>
  fetchKeystone<Location[]>('locations');

export const getImageUrl = (imagePath?: string): string => {
  return imagePath ? `${process.env.NEXT_PUBLIC_KEYSTONE_URL}${imagePath}` : '';
};
