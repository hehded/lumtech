// components/Navbar.tsx
import Image from "next/image";
import lumlogo from "C:/Users/Asus/Documents/denislumtach/my-app/public/logo.svg";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 pr-12 pl-12">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <Link href="/">
          <button>
            <Image src={lumlogo} width={150} height={50} alt="logo" />
          </button>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="" passHref>
          <button className="px-4 py-2 bg-greeny rounded-3xl font-base font-bold text-light-black">
            Contact us
          </button>
        </Link>
        <button className="px-4 py-2">EN</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button>
          {/* Icon for mobile menu */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
