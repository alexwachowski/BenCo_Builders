import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            BenCo.
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/home" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/About" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors">
           Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
