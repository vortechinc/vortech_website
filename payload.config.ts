import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Categories } from './src/payload/collections/Categories';
import { Jobs } from './src/payload/collections/Jobs';
import { Locations } from './src/payload/collections/Locations';
import { Media } from './src/payload/collections/Media';
import { Users } from './src/payload/collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const serverURL =
  process.env.PAYLOAD_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` ||
  '';

const allowedOrigins = [
  serverURL,
  'https://vortechinc.io',
  'https://www.vortechinc.io'
].filter(Boolean);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [Users, Media, Locations, Categories, Jobs],
  cors: allowedOrigins,
  csrf: allowedOrigins,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    }
  }),
  editor: lexicalEditor(),
  serverURL,
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload/payload-types.ts')
  }
});
