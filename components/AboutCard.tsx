interface AboutCardProps {
  title: string;
  description: string;
}

export default function AboutCard({
  title,
  description,
}: AboutCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-bold text-blue-600">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>
    </article>
  );
}
