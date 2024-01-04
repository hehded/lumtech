import Image from "next/image";
import shumfonImage from "C:/Users/Asus/Documents/denislumtach/my-app/public/shumfon.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-black">
      <div className="flex w-full">
        <div className="w-7/12">
          <h1
            className="text-4xl font-bold mb-5"
            style={{
              fontSize: "78px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "80px",
              textTransform: "uppercase",
              background:
                "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EMPOWERING BUSINESS THROUGH TECHNOLOGY
          </h1>
          <p className="text-lg text-graytext mb-12">
            We aim to simplify and strengthen your business through advanced
            technological solutions.
          </p>
          <button className="px-4 py-2 bg-greeny rounded-3xl font-base font-bold text-light-black">
            Discuss the project
          </button>{" "}
        </div>
        <div className="w-5/12">
          <Image
            src={"/path/to/image.jpg"}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-7/12">
          <p className="text-xl text-greeny font-semibold"> ABOUT COMPANY</p>
          <h1
            className="text-4xl font-bold mb-5"
            style={{
              fontSize: "78px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "80px",
              textTransform: "uppercase",
              background:
                "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHERE TECHNOLOGIES BECOME REALITY
          </h1>
          <p className="text-lg text-graytext mb-12">
            Lumtach is a modern, young IT company whose mission is to create
            innovative and functional technological solutions. Our team of
            talented developers, designers, and data analysis specialists works
            diligently to offer products that meet the needs of the modern
            market.
          </p>
          <button className="px-4 py-2 bg-greeny rounded-3xl font-base font-bold text-light-black">
            Discuss the project
          </button>{" "}
        </div>
        <div className="w-5/12 flex justify-center items-center">
          <div className="bg-black p-4">
            <div className="grid grid-cols-2 gap-1">
              <div className="flex justify-center items-center flex-col bg-gray-900 text-white p-12">
                <span
                  className="text-5xl"
                  style={{
                    fontSize: "78px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "80px",
                    textTransform: "uppercase",
                    background:
                      "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12
                </span>
                <span className="text-xl">projects</span>
              </div>
              <div className="flex justify-center items-center flex-col bg-gray-900 text-white p-12">
                <span
                  className="text-5xl"
                  style={{
                    fontSize: "78px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "80px",
                    textTransform: "uppercase",
                    background:
                      "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12
                </span>
                <span className="text-xl">projects</span>
              </div>
              <div className="flex justify-center items-center flex-col bg-gray-900 text-white p-12">
                <span
                  className="text-5xl"
                  style={{
                    fontSize: "78px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "80px",
                    textTransform: "uppercase",
                    background:
                      "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12
                </span>
                <span className="text-xl">projects</span>
              </div>
              <div className="flex justify-center items-center flex-col bg-gray-900 text-white p-12">
                <span
                  className="text-5xl"
                  style={{
                    fontSize: "78px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "80px",
                    textTransform: "uppercase",
                    background:
                      "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  72
                </span>
                <span className="text-xl">projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="text-center">
          <p className="text-greeny text-xl font-semibold font-oxanium uppercase leading-[80px]">
            HOW IT WORKS
          </p>
          <h1
            className="text-white
text-[78px]
font-semibold
font-Oxanium
uppercase
leading-[80px]"
          >
            Product development stages
          </h1>
          <p
            className="
text-neutral-400
text-lg
font-normal
font-inter
leading-[30px]"
          >
            From Research to Implementation: Steps Defining Project Success
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex md:w-8/12">
          <div className="w-7/12 bg-rose mr-6 h-fit">
            <span
              className="text-5xl"
              style={{
                fontSize: "78px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "80px",
                textTransform: "uppercase",
                background:
                  "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              1
            </span>
            <p
              className=" text-graytext mb-12 text-opacity-80
text-base
font-normal

leading-[30px]"
            >
              {" "}
              Research and Design: This stage involves analyzing customer
              requirements, studying the market and competitive environment,
              defining project goals and tasks. It is where the overall product
              concept is developed, including user interface, visual design,
              application architecture, and its functional capabilities.
            </p>
          </div>
          <div className="w-5/12 bg-indigo mr-6 h-fit">
            <span
              className="text-5xl"
              style={{
                fontSize: "78px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "80px",
                textTransform: "uppercase",
                background:
                  "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              2
            </span>
            <p
              className=" text-graytext mb-12 text-opacity-80
text-base
font-normal
leading-[30px]"
            >
              {" "}
              Development: The process of coding and project realization based
              on previous stages. Programming, integrating functions, testing
              individual modules.
            </p>
          </div>
        </div>
        <div className="flex-col md:w-4/12 h-full">
          <div className="w-full flex-row bg-lime ">
            <span
              className="text-5xl"
              style={{
                fontSize: "78px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "80px",
                textTransform: "uppercase",
                background:
                  "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              3
            </span>
            <p
              className=" text-graytext mb-12 text-opacity-80
text-base
font-normal
leading-[30px]"
            >
              {" "}
              Testing: After product development, specialists test for errors
              and deficiencies to ensure it meets quality standards.
            </p>
          </div>
          <div className="w-full bg-amber ">
            <span
              className="text-5xl"
              style={{
                fontSize: "78px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "80px",
                textTransform: "uppercase",
                background:
                  "var(--Linear, linear-gradient(115deg, #FFF 19.49%, rgba(255, 255, 255, 0.00) 98.47%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              4
            </span>
            <p
              className=" text-graytext mb-12 text-opacity-80
text-base
font-normal
leading-[30px]"
            >
              {" "}
              Deployment and Launch: The stage where the finished product is
              released and implemented for end-user use.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
