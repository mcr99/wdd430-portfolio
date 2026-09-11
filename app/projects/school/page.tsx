async function getProjects() {
  const response = await fetch('/api/projects?type=school');
  return response.json();
}

export default async function SchoolPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>School Projects</h1>
    </main>
  );
}
