import Image from "next/image";
import Link from "next/link";
import siteLogo from "../public/artofcse.png";
function Navbar() {
  return (
    <div>
      <section id="navbar">
        <nav class="p-5 bg-black shadow md:flex md: items-center md: justify-between">
          <div class="flex justify-between items-center">
            <Link href="/">
              <span class="cursor-pointer">
                <Image src={siteLogo} alt="logo" width={100} height={100} />
              </span>
            </Link>
            <span class="text-3xl text-white cursor-pointer mx-2 md:hidden block">
              <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
          </div>
          <ul class="md:flex md:items-center md:z-auto md:static absolute bg-black w-full left-0 md:py-0 py-4 md:pl-0 p1-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <Link href="/">
              <li class="mx-4 my-6 md:my-0 text-base text-lime-500 hover:text-cyan-500 duration-500">
                Home
              </li>
            </Link>
            <Link href="/">
              <li class="mx-4 my-6 md:my-0 text-base text-white hover:text-lime-500 duration-500">
                Courses
              </li>
            </Link>
            <Link href="/">
              <li class="mx-4 my-6 md:my-0 text-base text-white hover:text-lime-500 duration-500">
                Problem Solving
              </li>
            </Link>
            <Link href="/">
              <li class="mx-4 my-6 md:my-0 text-base text-white hover:text-lime-500 duration-500">
                Code
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
