import { getProjectById } from '@/lib/projects-db';
import { updateProject } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditProjectPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    notFound();
  }

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <form action={updateProject.bind(null, id)} className="space-y-6" >
        <div>
          <label htmlFor="title" className="block font-semibold mb-2" >Title</label>
          <input id="title" name="title" type="text" defaultValue={project.title} required className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold mb-2" >Description</label>
          <textarea id="description" name="description" defaultValue={project.description} required rows={5} className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="type" className="block font-semibold mb-2" >Type</label>
          <select id="type" name="type" defaultValue={project.type} required className="w-full border rounded p-2" >
            <option value="opensource">Open Source</option>
            <option value="school">School</option>
          </select>
        </div>
        <div>
          <label htmlFor="technologies" className="block font-semibold mb-2" > Technologies </label>
          <input id="technologies" name="technologies" type="text" defaultValue={project.technologies.join(', ')} required className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="link" className="block font-semibold mb-2" >Project Link</label>
          <input id="link" name="link" type="url" defaultValue={project.link ?? ''} className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" >Update Project</button>
      </form>
    </main>
  );
}
