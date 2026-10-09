import CreateProjectForm from '@/app/projects/create/create-project-form';

export default function NewProjectPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Create Project</h1>
      <CreateProjectForm />
    </main>
  );
}