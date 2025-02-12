import { NextResponse } from 'next/server';
import { revalidate } from '../server';

export async function GET() {
  await revalidate();
  return NextResponse.json({});
}
