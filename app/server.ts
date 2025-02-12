'use server';

import {
  unstable_cacheTag as cacheTag,
  unstable_expireTag as expireTag,
} from 'next/cache';
import { sleep } from './sleep';

export async function revalidate() {
  await sleep(5000);
  expireTag('number');
}

export async function getNumber() {
  'use cache';
  cacheTag('number');

  const date = new Date().getTime();
  console.log('miss', date);

  return date;
}
