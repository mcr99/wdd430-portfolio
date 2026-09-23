import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

export default async function OpenSourcePage() {
  const projects = await getProjects('opensource');

  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Open Source Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}