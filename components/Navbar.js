import Image from "next/image";
import Link from "next/link";
import NavbarLogo from "../public/artofcse.png";
import { useState } from "react";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-800 shadow relative">
        <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <span className="cursor-pointer">
                  <Image src={NavbarLogo} alt="logo" width={100} height={100} />
                </span>
              </Link>
              <div className="md:hidden ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <i className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer text-white "></i>
                  ) : (
                    <i className="fa-solid fa-bars duration-300 text-lg sm:text-3xl cursor-pointer text-white"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0   ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center  mx-6 md:mx-10 space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:underline ">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white hover:underline">
                  <Link href="/courses/course">Courses</Link>
                </li>
                <li className="text-white hover:underline">
                  <Link href="/">Problem Solving</Link>
                </li>
                <li className="text-white hover:underline">
                  <Link href="/">Code</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
