import ApplyButton from '@/components/ApplyButton';
import { DocumentRenderer } from '@/components/common/DocumentRender';
import Header from '@/components/common/Header';
import { getImageUrl, getJobById } from '@/utils/keystoneRest';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '../loading';
import { APPLY } from '@/utils/lang';
import { images_src } from '@/utils/constants';

export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function JobDetails({ id }: { id: string }) {
  const job = await getJobById(id);

  if (!job) {
    return <div className="py-10 text-center text-lg">Job not found</div>;
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <Image
          src={getImageUrl(job?.image?.url) || images_src.DEFAULT_JOB_IMAGE}
          alt={`${job.position} logo`}
          width={120}
          height={120}
          className="mx-auto h-30 w-30 object-cover md:mx-0"
        />
        <div className="flex flex-col justify-items-start px-4 text-white md:pl-4">
          <h1 className="text-2xl font-bold md:text-3xl">{job.position}</h1>
          <div className="mt-2 mb-4 w-fit rounded-md bg-gray-100 px-4 py-2 text-sm text-black">
            {job.location?.name || 'Remote'}
          </div>
          <DocumentRenderer document={job.description} />
        </div>
      </div>
      <div className="flex justify-center">
        <ApplyButton position={job.position} buttonText={APPLY} />
      </div>
    </div>
  );
}

export default async function CareerDetailsPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="bg-dark-black min-h-screen w-full max-w-screen space-y-16">
      <Header />
      <div className="flex flex-col gap-10 px-4 pt-48 pb-12 md:px-10 md:pb-0 lg:px-14 xl:px-32">
        <Suspense fallback={<Loading />}>
          <JobDetails id={id} />
        </Suspense>
      </div>
    </div>
  );
}
