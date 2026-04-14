'use client';
import { JOB_PAGE_SIZE } from '@/utils/constants';
import { getImageUrl, getJobs } from '@/utils/keystoneRest';
import { Category, Job, Location } from '@/utils/types';
import { ArrowRight, SearchIcon } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import JobFilter from './JobFilter';
import JobItem from './JobItem';

interface JobContentProps {
  initialJobs: Job[];
  locations: Location[];
  categories: Category[];
  initialTotal: number;
}

const JobContent = ({
  initialJobs,
  locations,
  categories,
  initialTotal = 0
}: JobContentProps) => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(initialTotal);
  const [currentFilters, setCurrentFilters] = useState<{
    search: string;
    locationId: string;
    categoryId: string;
  }>({
    search: '',
    locationId: '',
    categoryId: ''
  });

  const isFirstFilterCall = useRef(true);

  const handleFilter = useCallback(
    async (search: string, locationId: string, categoryId: string) => {
      if (isFirstFilterCall.current) {
        isFirstFilterCall.current = false;
        setCurrentFilters({ search, locationId, categoryId });
        return;
      }

      setIsLoading(true);
      setCurrentPage(1);
      setCurrentFilters({ search, locationId, categoryId });

      try {
        const result = await getJobs({
          search,
          locationId,
          categoryId,
          page: 1,
          limit: JOB_PAGE_SIZE
        });

        setJobs(result.data);
        setTotalJobs(result.pagination?.total || result.data.length);
      } catch (error) {
        console.error('Error filtering jobs:', error);
        setJobs([]);
        setTotalJobs(0);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || jobs.length >= totalJobs) return;

    setIsLoadingMore(true);
    const nextPage = currentPage + 1;

    try {
      const result = await getJobs(
        {
          ...currentFilters,
          page: nextPage,
          limit: JOB_PAGE_SIZE
        },
        process.env.NEXT_PUBLIC_KEYSTONE_URL
      );

      setJobs((prevJobs) => [...prevJobs, ...result.data]);
      setCurrentPage(nextPage);

      if (result.pagination?.total) {
        setTotalJobs(result.pagination.total);
        setIsLoadingMore(
          jobs.length + result.data.length < result.pagination.total
        );
      }
    } catch (error) {
      console.error('Error loading more jobs:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, jobs.length, totalJobs, currentPage, currentFilters]);

  const hasMoreJobs = jobs.length < totalJobs;

  return (
    <div className="flex flex-col items-center gap-6">
      <JobFilter
        onFilter={handleFilter}
        locations={locations}
        categories={categories}
      />

      {isLoading && (
        <div className="py-8 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="border-black-600 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
            <p className="text-gray-600">Loading jobs...</p>
          </div>
        </div>
      )}

      {!isLoading && jobs.length > 0 && (
        <div className="flex w-full flex-col items-center gap-6">
          <div className="w-full space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {jobs.map((item) => (
              <JobItem
                jobName={item.position}
                location={item?.location?.name}
                imageUrl={getImageUrl(item?.image?.url)}
                level={item?.category?.name}
                key={item.id}
                id={item.id}
              />
            ))}
          </div>

          {hasMoreJobs && (
            <div className="py-6">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="text-black-600 focus:ring-black-500 bg-orange inline-flex items-center gap-2 rounded-lg border-2 px-8 py-3 text-base font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoadingMore ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent text-white"></div>
                    <span className="text-white">Loading more...</span>
                  </>
                ) : (
                  <div className="flex flex-row items-center gap-4">
                    <span className="text-white">See more</span>
                    <ArrowRight className="text-white" size={22} />
                  </div>
                )}
              </button>
            </div>
          )}

          <div className="text-center text-sm text-[#B9B9B9] md:pb-4">
            Showing {jobs.length} of {totalJobs} jobs
          </div>
        </div>
      )}

      {!isLoading && jobs.length === 0 && (
        <div className="py-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#737373]">
            <SearchIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-white">No jobs found</h3>
          <p className="text-white">
            No job openings match your criteria. Try adjusting your filters or
            check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default JobContent;
