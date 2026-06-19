import config from '@payload-config';
import '@payloadcms/next/css';
import {
  handleServerFunctions,
  RootLayout
} from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import { importMap } from './admin/importMap.js';

export default function PayloadLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={handleServerFunctions as ServerFunctionClient}
    >
      {children}
    </RootLayout>
  );
}
