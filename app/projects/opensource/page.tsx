async function getProjects() {
  const response = await fetch('/api/projects?type=opensource');
  return response.json();
}

export default async function OpenSourcePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Open Source Projects</h1>
    </main>
  );
}
