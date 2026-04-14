import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_SECRET = process.env.KEYSTONE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-webhook-secret');
    if (secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    revalidatePath('/career', 'page');
    revalidatePath('/career/[id]', 'page');

    return NextResponse.json({
      revalidated: true,
      message: `Revalidate Job`
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}
