import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs/promises';
import path from 'path';
import { dataURL } from '@/utils/constants';
import Header from '@/components/common/Header';

export const dynamic = 'force-dynamic';

const getPrivacyContent = async () => {
  const filePath = path.join(process.cwd(), dataURL.terms);
  const markdown = await fs.readFile(filePath, 'utf8');
  return { content: markdown };
};

export default async function PrivacyPage() {
  const privacyContent = await getPrivacyContent();

  return (
    <div className="bg-dark-black flex min-h-screen items-center justify-center">
      <Header />
      <div className="bg-dark-black mt-24 max-w-3xl rounded-lg px-8 py-14 text-white sm:px-6 lg:px-16 xl:px-20 2xl:max-w-4xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => (
              <h1
                className="mb-8 text-2xl leading-tight font-normal sm:text-4xl 2xl:text-5xl"
                {...props}
              />
            ),
            h2: ({ ...props }) => (
              <h2
                className="mt-10 mb-2 text-base font-semibold tracking-wide uppercase sm:text-lg md:text-xl"
                {...props}
              />
            ),
            hr: ({ ...props }) => (
              <hr className="my-4 border-gray-300" {...props} />
            ),
            p: ({ ...props }) => (
              <p
                className="my-4 text-justify text-sm leading-relaxed font-light sm:text-base"
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                className="my-4 ml-6 list-disc text-justify text-sm leading-relaxed font-light sm:text-base"
                {...props}
              />
            ),
            ol: ({ ...props }) => (
              <ol
                className="mb-4 ml-6 list-decimal text-justify text-sm leading-relaxed font-light sm:text-base"
                {...props}
              />
            ),
            li: ({ ...props }) => (
              <li className="mb-2 text-justify" {...props} />
            )
          }}
        >
          {privacyContent.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
