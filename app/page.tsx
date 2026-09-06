import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Pokedex',
    description: 'A Javascript project connected to the Pokeapi',
    technologies: ['Javascript', 'HTML', 'CSS'],
    link: 'https://github.com/mcr99/pokedex'
  },
  {
    title: 'Weather Application',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/mcr99/Weather-App'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}