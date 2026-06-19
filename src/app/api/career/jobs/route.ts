import { getPublishedJobs } from '@/utils/payloadCareer';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const result = await getPublishedJobs({
    search: searchParams.get('search') || '',
    locationId: searchParams.get('locationId') || '',
    categoryId: searchParams.get('categoryId') || '',
    page: Number(searchParams.get('page') || 1),
    limit: Number(searchParams.get('limit') || undefined)
  });

  return NextResponse.json(result);
}
