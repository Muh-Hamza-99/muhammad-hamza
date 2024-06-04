import { skills } from "@/lib/display-icons";

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
              Hey! My name is Hamza. I am from <span className="font-bold text-teal-500">Pakistan</span>,
              lived in <span className="font-bold text-teal-500">{"Saudi Arabia "}</span>
               and am now studying in <span className="font-bold text-teal-500">{"Canada "}</span>
              studying at the University of Waterloo, with an intended major in <span className="font-bold text-teal-500">{"Computer Science "}</span>
              and <span className="font-bold text-teal-500">Statistics</span>.
            </p>
            <br />
            <p>
              Whenever I come out of my programming and studying cove, I like to play the Tabla, football, cricket, squash and chess (is it a sport?).
            </p>
            <br />
            <p>
            Apart from that, I do get homesick quite a bit! Whether it be the hot, dusty and lively nights of Riyadh
            or the scenic views and crisp air of Pakistan, I miss it. If you do as well, let us talk!
            </p>
            <br />
            <p>
              <span className="font-bold text-teal-500">muhammad.hamzaasad@gmail.com</span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-6">Skills</h1>
              <div className="flex flex-wrap justify-center md:justify-normal">
                {skills.map((icon, i) => (<img key={i} className="p-1" src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
