import Pagination from '@/components/Pagination';
import ProjectList from '@/components/ProjectList';
import ProjectSearch from '@/components/ProjectSearch';
import { fetchFilteredProjects, fetchProjectsPages, } from '@/lib/projects-db';

interface ProjectsPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;

  const query = params?.query?.trim() ?? '';

  const parsedPage = Number(params?.page);
  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Projects Overview</h1>
      <ProjectSearch />
      <ProjectList projects={projects} />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
