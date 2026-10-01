'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">
  <div>
    <label htmlFor="title" className="block font-semibold mb-2">
      Title
    </label>

    <input
      id="title"
      name="title"
      type="text"
      required
      aria-describedby="title-error"
      className="w-full border rounded p-2"
    />

    <div id="title-error" aria-live="polite" aria-atomic="true">
      {state.errors?.title?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="description" className="block font-semibold mb-2">
      Description
    </label>

    <textarea
      id="description"
      name="description"
      required
      rows={5}
      aria-describedby="description-error"
      className="w-full border rounded p-2"
    />

    <div id="description-error" aria-live="polite" aria-atomic="true">
      {state.errors?.description?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="type" className="block font-semibold mb-2">
      Type
    </label>

    <select
      id="type"
      name="type"
      required
      aria-describedby="type-error"
      className="w-full border rounded p-2"
    >
      <option value="opensource">Open Source</option>
      <option value="school">School</option>
    </select>

    <div id="type-error" aria-live="polite" aria-atomic="true">
      {state.errors?.type?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="technologies" className="block font-semibold mb-2">
      Technologies
    </label>

    <input
      id="technologies"
      name="technologies"
      type="text"
      placeholder="React, Next.js, PostgreSQL"
      required
      aria-describedby="technologies-error"
      className="w-full border rounded p-2"
    />

    <div id="technologies-error" aria-live="polite" aria-atomic="true">
      {state.errors?.technologies?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="link" className="block font-semibold mb-2">
      Project Link
    </label>

    <input
      id="link"
      name="link"
      type="url"
      placeholder="https://example.com"
      aria-describedby="link-error"
      className="w-full border rounded p-2"
    />

    <div id="link-error" aria-live="polite" aria-atomic="true">
      {state.errors?.link?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  {state.message ? (
    <p className="text-sm text-red-600" aria-live="polite">
      {state.message}
    </p>
  ) : null}

  <button
    type="submit"
    disabled={isPending}
    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isPending ? 'Saving...' : 'Save Project'}
  </button>
</form>

  );
}
