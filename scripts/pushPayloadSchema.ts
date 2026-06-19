import { pushDevSchema } from '@payloadcms/drizzle';
import { getPayload } from 'payload';
import config from '../payload.config';

process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = 'true';

const payload = await getPayload({ config });

try {
  payload.logger.info('Pushing Payload database schema...');
  await pushDevSchema(payload.db);
  payload.logger.info('Payload database schema is up to date.');
} finally {
  await payload.destroy();
}
