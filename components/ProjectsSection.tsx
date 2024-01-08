import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

type Project = {
  name: string
  description: string
  image: string
  github: string
  link?: string
}

const projects: Project[] = [
  {
    name: "Formify",
    description:
      "Form submission as a RESTful API built using the PERN stack. Main usage is for 'Contact Us' sections in webpages.",
    image: "/formify.png",
    github: "https://github.com/Muh-Hamza-99/formify-api",
  },
  {
    name: "Carmage",
    description: "A screenshot service to take presentable images of source code using the famous carbon website. Built as both a CLI and API.",
    image: "/carmage.png",
    github: "https://github.com/Muh-Hamza-99/carbon-image-cli",
  },
  {
    name: "S&P500 Prediction",
    description:
      "A full-stack app that helps users predict stock prices using an SVM model. Made available using an API and a simple frontend to manage API keys.",
    image: "/s&p500-prediction.png",
    github: "https://github.com/Muh-Hamza-99/stock-prediction-app",
  },
  {
    name: "Class of 2023",
    description: "An archive sort of website for the students part of the graduating class of 2023.",
    image: "/class-of-2023.png",
    github: "https://github.com/Muh-Hamza-99/class-of-2023",
    link: "https://class-of-2023.netlify.app/",
  },
  {
    name: "Brain Tumor Detection",
    description: "A Flask app to detect tumors in brain scans using a convolutional neural network.",
    image: "/brain-tumor-detection.png",
    github: "https://github.com/Muh-Hamza-99/brain-tumor-detection",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project.link ? (<Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>) : (
                      <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl"
                    />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      { project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
