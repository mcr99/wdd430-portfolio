import { getProjects } from '@/lib/projects-db';
import ProjectList from './ProjectList';

export default async function SchoolProjectList() {
  const projects = await getProjects('school');

  return <ProjectList projects={projects} />;
}
