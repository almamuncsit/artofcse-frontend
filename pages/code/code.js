import Link from "next/link";
import Image from "next/image";
import codeImg from "../../public/c.jpg";
function Code() {
  return (
    <div>
      <>
        {/* Start Code for Intro Section */}
        <section id="intro">
          <div className="grid place-items-center pt-10 bg-gradient-to-r from-cyan-500 to-green-200">
            <div>
              <h2 className="text-white text-3xl sm:2xl tracking-widest font-bold">
                Coding Examples
              </h2>
            </div>
            <div className="pt-2 pb-5">
              <p className="text-gray-100 text-sm sm:text-sm">
                Learn coding quickly. Take help when are in a problem.
              </p>
            </div>
          </div>
        </section>
        {/* End Code for Intro Section */}

        {/* Start Code for Blog Section for Code page */}
        <section className="CodingPage pb-28">
          <div className="container pt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
              <div className="card">
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg card-img">
                    <Image src={codeImg} alt="image" className="rounded-full p-3" />

                    <div className="flex flex-col justify-start p-2">
                      <h5 className="text-gray-900 text-xs font-semibold mb-2 hover:underline">
                        <Link href="#">Python Programming</Link>
                      </h5>

                      <p className="text-gray-600 text-xs">
                        Python is popular for Data Science, Machine Learning, Web Development,...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg card-img">
                    <Image src={codeImg} alt="image" className="rounded-full p-3" />

                    <div className="flex flex-col justify-start p-2">
                      <h5 className="text-gray-900 text-xs font-semibold mb-2 hover:underline">
                        <Link href="#">Python Programming</Link>
                      </h5>

                      <p className="text-gray-600 text-xs">
                        Python is popular for Data Science, Machine Learning, Web Development,...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg card-img">
                    <Image src={codeImg} alt="image" className="rounded-full p-3" />

                    <div className="flex flex-col justify-start p-2">
                      <h5 className="text-gray-900 text-xs font-semibold mb-2 hover:underline">
                        <Link href="#">Python Programming</Link>
                      </h5>

                      <p className="text-gray-600 text-xs">
                        Python is popular for Data Science, Machine Learning, Web Development,...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg card-img">
                    <Image src={codeImg} alt="image" className="rounded-full p-3" />

                    <div className="flex flex-col justify-start p-2">
                      <h5 className="text-gray-900 text-xs font-semibold mb-2 hover:underline">
                        <Link href="#">Python Programming</Link>
                      </h5>

                      <p className="text-gray-600 text-xs">
                        Python is popular for Data Science, Machine Learning, Web Development,...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg card-img">
                    <Image src={codeImg} alt="image" className="rounded-full p-3" />

                    <div className="flex flex-col justify-start p-2">
                      <h5 className="text-gray-900 text-xs font-semibold mb-2 hover:underline">
                        <Link href="#">Python Programming</Link>
                      </h5>

                      <p className="text-gray-600 text-xs">
                        Python is popular for Data Science, Machine Learning, Web Development,...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Code for Blog Section for Code page */}
      </>
    </div>
  );
}

export default Code;
