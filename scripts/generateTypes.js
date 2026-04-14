import path from 'path';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
const apiUrl = process.env.STRAPI_URL;
const openapiPath = process.env.STRAPI_OPENAPI_PATH;
const outputPath = './src/utils/strapiTypes.d.ts';
const fullUrl = `${apiUrl}${openapiPath}`;

try {
  execSync(`npx openapi-typescript ${fullUrl} -o ${outputPath}`, { stdio: 'inherit' });
  console.log(`Types successfully generated at: ${outputPath}`);
} catch (error) {
  console.error('Error generating types:', error.message || 'Unknown error occurred');
  process.exit(1);
}
