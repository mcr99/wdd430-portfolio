export default function Footer() {  
  return (
    <footer className="bg-gray-800 text-white p-5 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Marvin Canastuj | All rights reserved</p>
      </div>
    </footer>
  );
}