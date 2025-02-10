'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import { sleepyServer } from './server';
import { sleep } from './sleep';

export function ClientComponent() {
  const [pending, startTransition] = useTransition();

  const handleClient = () => {
    startTransition(async () => {
      console.log('start client transition');
      await sleep(5000);
      console.log('end client transition');
    });
  };

  const handleServer = () => {
    startTransition(async () => {
      console.log('start server transition');
      await sleepyServer();
      console.log('end server transition');
    });
  };

  const handleRouteHandler = () => {
    startTransition(async () => {
      console.log('start route handler transition');
      await fetch('/sleep');
      console.log('end route handler transition');
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
      <button onClick={handleClient}>Long running client transition</button>
      <button onClick={handleServer}>Long running server transition</button>
      <button onClick={handleRouteHandler}>
        Long running route handler transition
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
