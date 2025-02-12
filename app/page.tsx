import { connection } from 'next/server';
import { ClientComponent } from './client';

export default async function Home() {
  await connection();
  return <ClientComponent />;
}
