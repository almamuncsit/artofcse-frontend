import Image from "next/image";
import blogImage from "../../public/courses.jpg";
import Link from "next/link";

function courseCurriculum() {
  return (
    <div>
      <>
        {/* Start Code for Intro Section */}
        <section id="intro" className="bg-gradient-to-r from-cyan-500 to-green-200">
          <div className="container pt-3 pb-3">
            <div className="flex flex-row">
              <div className="basis-1/4"></div>
              <div className="basis-1/4 ">
                <Image src={blogImage} alt="image" className="rounded" />
              </div>
              <div className="basis-1/2 mx-3">
                <h1 className="text-white text-2xl sm:text-2xl font-bold ">
                  PHP OOP Design Patterns And Principles
                </h1>
                <p className="text-white text-xs sm:text-xs mt-2">
                  এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                  DRY Principles নিয়ে আলোচনা করব
                </p>
              </div>
              <div className="basis-1/4"></div>
            </div>
          </div>
        </section>
        {/* End Code for Intro Section */}

        {/* Start Code for Course Curriculum Section */}
        <section className="CourseCurriculum pb-20">
          <div className="container">
            <div className="flex justify-center pt-3">
              <div className=" text-2xl font-bold">
                <h1>Course Curriculum</h1>
                <div className="courseTitle">
                  <h3 className="text-sm cursor-pointer bg-gray-400 hover:underline px-4 my-2">
                    Basic PHP
                  </h3>
                  <ul className="divide-y divide-white">
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          1 Basic PHP, Variable, String, Constant, Array, Operators, Loop
                        </p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">2 Use of functions in PHP</p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          3 PHP ফরম এর GET এবং POST Method এর ব্যবহার
                        </p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          4 PHP date time, var_dump, include, require, session এর ব্যবহার
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="courseTitle">
                  <h3 className="text-sm cursor-pointer bg-gray-400 hover:underline px-4 my-2">
                    Database
                  </h3>
                  <ul className="divide-y divide-white">
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">1 Database Management System</p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          2 SQL, Create Database and table, Data type, Select, Where, Order by,
                          Limit
                        </p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          3 SQL দিয়ে Database এ ডাটা Insert, Update এবং Delete করা
                        </p>
                      </Link>
                    </li>
                    <li className=" hover:bg-green-200">
                      <Link href="">
                        <p className="text-xs py-2 mx-2">
                          4 SQL Aggregate functions, Order By, Join Query
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Code for Course Curriculum Section */}
      </>
    </div>
  );
}

export default courseCurriculum;
