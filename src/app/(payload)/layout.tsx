import config from '@payload-config';
import '@payloadcms/next/css';
import '@/payload/admin/vortech-admin.css';
import { RootLayout } from '@payloadcms/next/layouts';
import { importMap } from './admin/importMap.js';
import { serverFunction } from './serverFunction';

export default function PayloadLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
