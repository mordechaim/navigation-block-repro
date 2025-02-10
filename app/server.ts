'use server';

import { sleep } from './sleep';

export async function sleepyServer() {
  await sleep(5000);
}
