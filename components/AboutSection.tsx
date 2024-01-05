import { createElement } from "react";

import { skills } from "@/lib/display-icons";
import { hobbies } from "@/lib/display-icons";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hamza and I am a{" "} and
              <span className="font-bold">{" driven"}</span> student
              studying at the University of Waterloo.
            </p>
            <br />
            <p>
              I graduated from MRIS, Riyadh in 2023
              with a high school diploma from the British school system. Throughout
              high school, I have been coding and working with technologies,
              growing fond of {" "}
              <span className="font-bold text-teal-500">web development</span> and {" "} 
              <span className="font-bold text-teal-500">machine learning</span>, with a newfound 
              interest in {" "}
              <span className="font-bold text-teal-500">data analytics</span>.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, content creation, to playing the Tabla,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my life takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,js,ts,react,next,nodejs,express,nestjs,mongodb,postgresql,prisma,git,postman,python,sklearn,tensorflow,netlify,docker,terraform&theme=dark&perline=7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-6">My Hobbies</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {hobbies.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 flex items-center justify-between rounded font-semibold"
                    >
                      <span className="mr-[2px]">{item.name}</span>
                      <span>{createElement(item.icon!, { color: item.color })}</span>
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
