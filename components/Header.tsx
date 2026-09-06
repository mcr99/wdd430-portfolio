import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md flex p-5">
      <div id="header-title" className="text-2xl font-bold w-full">Marvin Canastuj</div>
      <nav className="max-w-4xl mx-auto px-4 flex items-center w-full justify-end">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}