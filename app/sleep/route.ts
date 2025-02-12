import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { sleep } from '../sleep';

export async function GET() {
  await sleep(5000);
  revalidateTag('number');
  return NextResponse.json({});
}
