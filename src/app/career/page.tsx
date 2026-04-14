import Description from '@/components/common/Description';
import Header from '@/components/common/Header';
import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import JobContent from '@/components/JobContent';
import { getCategories, getJobs, getLocations } from '@/utils/keystoneRest';
import {
  CAREER_DESCRIPTION,
  CAREER_SUB_TITLE,
  CAREER_TITLE,
  OUR_POSITIONS
} from '@/utils/lang';
import { Suspense } from 'react';
import Loading from './loading';

export const dynamic = 'force-dynamic';

export default async function CareerPage() {
  const [initialResult, categories, locations] = await Promise.all([
    getJobs({}),
    getCategories(),
    getLocations()
  ]);

  const initialJobs = initialResult.data;

  return (
    <div className="bg-dark-black min-h-screen w-full max-w-screen space-y-16">
      <Header />
      <div className="mt:pb-12 0 flex flex-col space-y-6 px-4 pt-28 pb-4 md:px-10 md:pt-48 md:pb-0 lg:px-14 xl:px-32">
        <Title title={CAREER_TITLE} />
        <SubTitle className="text-white" subTitle={CAREER_SUB_TITLE} />
        <Description
          className="max-w-6xl font-normal text-white md:max-w-4xl lg:text-base 2xl:text-base"
          text={CAREER_DESCRIPTION}
        />
        <SubTitle subTitle={OUR_POSITIONS} />
        <Suspense fallback={<Loading />}>
          <JobContent
            initialJobs={initialJobs}
            categories={categories}
            locations={locations}
            initialTotal={initialResult.pagination.total}
          />
        </Suspense>
      </div>
    </div>
  );
}
