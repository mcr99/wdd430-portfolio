import { Suspense } from 'react';

import SchoolProjectList from '@/components/SchoolProjectList';

export default function SchoolPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>School Projects</h1>
      <Suspense fallback={<ProjectListSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}

function ProjectListSkeleton() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 animate-pulse">
      <div className="h-40 rounded bg-slate-200" />
      <div className="h-40 rounded bg-slate-200" />
    </section>
  );
}
