'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import { revalidate } from './server';

export function ClientComponent() {
  const [pending, startTransition] = useTransition();

  const handleServerAction = () => {
    startTransition(async () => {
      console.log('start server action');
      await revalidate();
      console.log('end server action');
    });
  };

  const handleRouteHandler = () => {
    startTransition(async () => {
      console.log('start route handler');
      const res = await fetch('/sleep');
      await res.json();
      console.log('end route handler');
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <button onClick={handleServerAction}>
        Revalidate with Server action
      </button>
      <button onClick={handleRouteHandler}>
        Revalidate with Route handler
      </button>

      <Link
        href='/page-2'
        style={{
          fontFamily: 'monospace',
          marginTop: 24,
        }}
      >
        /page-2
      </Link>
    </div>
  );
}
