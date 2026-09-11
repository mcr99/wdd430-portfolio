import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md flex p-5">
      <div id="header-title" className="text-2xl font-bold w-full">Marvin Canastuj
      </div>
        <NavLinks/>
    </header>
  );
}