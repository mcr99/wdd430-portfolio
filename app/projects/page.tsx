async function getProjects() {
  const response = await fetch('/api/projects');
  return response.json();
}

export default async function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Projects Overview</h1>
    </main>
  );
}
