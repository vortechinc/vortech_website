import config from '@payload-config';
import { getPayload } from 'payload';

const DEBUG_TOKEN = 'vortech-debug-20260619';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get('token') !== DEBUG_TOKEN) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'jobs',
      depth: 2,
      limit: 1
    });

    return Response.json({ ok: true, result });
  } catch (error) {
    return Response.json(
      {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
