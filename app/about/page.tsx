import AboutCard from "@/components/AboutCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 py-5 text-center">
        This about page shares more information about my background and work.
      </p>
      <div className="grid gap-6 md:grid-cols-2 ">
        <AboutCard
          title="My Background"
          description="I am a web development student learning how to build modern and responsive web applications."
        />
        <AboutCard
          title="My Goals"
          description="My goal is to continue improving my skills and become a successful full-stack web developer."
        />
      </div>
    </main>
  );
}