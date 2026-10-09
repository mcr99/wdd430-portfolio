import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article>
        <h1 className="text-3xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-700 mb-4">
          {project.description}
        </p>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Type:</strong> {project.type}
        </p>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Technologies:</strong>{' '}
          {project.technologies.join(', ')}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        )}
      </article>
    </main>
  );
}