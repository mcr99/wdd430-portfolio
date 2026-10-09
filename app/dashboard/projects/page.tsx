import Link from 'next/link';
import { fetchFilteredProjects } from '@/lib/projects-db';
import { deleteProject } from '@/lib/actions';

export default async function DashboardProjectsPage() {
  const projects = await fetchFilteredProjects('', 1);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>

      <Link
        href="/dashboard/projects/new"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-6"
      >
        Create Project
      </Link>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded"
          >
            <h2 className="text-xl font-bold mb-2 text-black">
              {project.title}
            </h2>

            <p className="text-gray-700 mb-3">
              {project.description}
            </p>

            <p className="text-sm text-gray-600 mb-4">
              <strong>Technologies:</strong>{' '}
              {project.technologies.join(', ')}
            </p>

            <div className="flex gap-3">
              <Link
                href={`/dashboard/projects/${project.id}/edit`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </Link>

              <form action={deleteProject.bind(null, project.id)}>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </form>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}