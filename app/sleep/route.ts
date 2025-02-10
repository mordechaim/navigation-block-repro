import { sleep } from '../sleep';

export async function GET() {
  await sleep(5000);
  return new Response(undefined, { status: 200 });
}
