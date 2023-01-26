import Link from "next/link";
import Image from "next/image";
import blogImage from "../../public/courses.jpg";

export default function Course() {
  return (
    <>
      {/* Start Code for Intro Section */}
      <section id="intro">
        <div className="grid place-items-center pt-10 bg-gradient-to-r from-cyan-500 to-green-200">
          <div>
            <h2 className="text-white text-3xl sm:2xl font-light tracking-widest font-bold">
              Latest Courses
            </h2>
          </div>
          <div className="pt-2 pb-5">
            <p className="text-gray-100 text-sm sm:text-sm">
              Find our course to take your programming and development skills to the next level.
            </p>
          </div>
        </div>
      </section>
      {/* End Code for Intro Section */}

      {/* Start Code for Blog Section */}
      <section className="blog1 pb-10">
        <div className="container pt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
            <div className="blog-post px-2">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>

            <div className="blog-post px-2">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>
            <div className="blog-post px-2">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>
            <div className="blog-post px-2 ">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 text-sm sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>
            <div className="blog-post px-2 ">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 text-sm sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>
            <div className="blog-post px-2 ">
              <Link href="#">
                <Image src={blogImage} alt="img" className="mt-1" />
              </Link>
              <Link href="#">
                <h4 className="text-blue-500 text-sm sm:text-xs font-semibold mt-1">
                  PHP OOP, Design Patterns, Principles
                </h4>
              </Link>
              <p className="text-xs sm:text-xs font-light mt-2">
                এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS, DRY
                Principles নিয়ে আলোচনা করব
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Code for Blog Section */}
    </>
  );
}
