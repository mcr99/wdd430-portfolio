'use client';

import { updateProject } from '@/lib/actions';

interface EditProjectFormProps {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export default function EditProjectForm({
  id,
  title,
  description,
  type,
  technologies,
  link,
}: EditProjectFormProps) {
  return (
    <form
      action={updateProject.bind(null, id)}
      className="space-y-6"
    >
      <div>
        <label htmlFor="title" className="block font-semibold mb-2">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={title}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={description}
          required
          rows={5}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="type" className="block font-semibold mb-2">
          Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue={type}
          required
          className="w-full border rounded p-2"
        >
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>
      </div>

      <div>
        <label htmlFor="technologies" className="block font-semibold mb-2">
          Technologies
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          defaultValue={technologies.join(', ')}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="link" className="block font-semibold mb-2">
          Project Link
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={link ?? ''}
          className="w-full border rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Update Project
      </button>
    </form>
  );
}