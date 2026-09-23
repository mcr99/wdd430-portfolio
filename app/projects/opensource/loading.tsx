export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-12 animate-pulse">
      <div className="mb-6 h-10 w-72 rounded bg-slate-200" />

      <section className="grid gap-4 md:grid-cols-2">
        <div className="h-40 rounded bg-slate-200" />
        <div className="h-40 rounded bg-slate-200" />
      </section>
    </main>
  );
}
