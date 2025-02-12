import Link from 'next/link';
import { connection } from 'next/server';
import { getNumber } from '../server';

export default async function Page2() {
  await connection();
  const value = await getNumber();

  return (
    <div>
      {value}
      <div>
        <Link href='/'>Back</Link>
      </div>
    </div>
  );
}
