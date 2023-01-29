import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="footer bg-gray-800">
        <div className="container">
          <div className="p-5 shadow md:flex md: items-right md: justify-between ">
            <div className="flex">
              <p className="text-gray-600 text-sm">
                Copyrights © 2023 All Reserved by
                <span className="text-white hover:text-cyan-500 duration-500">
                  <Link href="#"> Art of CSE </Link>
                </span>
              </p>
            </div>
            <div className="flex">
              <ul className="flex">
                <li className="mx-4 my-6 md:my-0 text-white hover:text-cyan-500 duration-500">
                  <Link href="#">About</Link>
                </li>
                <li className="mx-4 my-6 md:my-0 text-white hover:text-cyan-500 duration-500">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
