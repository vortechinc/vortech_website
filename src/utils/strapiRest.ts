import type { components } from './strapiTypes';

const URL = `${process.env.STRAPI_URL}/api`;
const TOKEN = process.env.STRAPI_TOKEN;

export type StrapiSchema = components['schemas'];

export interface StrapiResponse<T> {
  data: Array<T>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: object;
}

export const fetchStrapi = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const rest = await fetch(`${URL}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    ...options
  });
  if (!rest.ok) {
    const errorText = await rest.text();
    throw new Error(
      `Strapi API request failed: ${rest.status} ${rest.statusText} - ${errorText}`
    );
  }
  const data = await rest.json();
  return data;
};

export const getJobs = (): Promise<StrapiResponse<StrapiSchema['Job']>> =>
  fetchStrapi<StrapiResponse<StrapiSchema['Job']>>('jobs?populate=*');

export const getJobById = (
  id: string
): Promise<StrapiSingleResponse<StrapiSchema['Job']>> =>
  fetchStrapi<StrapiSingleResponse<StrapiSchema['Job']>>(`jobs/${id}`);
