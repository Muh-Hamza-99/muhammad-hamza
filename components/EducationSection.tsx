const EducationSection = () => {
  return (
    <section id="education">
        <h1 className="my-10 text-center font-bold text-4xl">
            Education
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              High School
            </h1>
            <p>
              I graduated high school from Manarat Al-Riyadh International School. I did <span className="text-teal-500 font-bold">8 IGCSE's</span>, 
              <span className="text-teal-500 font-bold"> 4 AS Levels</span> and <span className="text-teal-500 font-bold">3 A Levels</span>.
            </p>
            <br />
            <p>
              Aside from studies, I was always building web applications, scripts and other random programs. Fun fact, I built a bot which topped in the 
              arithmetic competition, which solved <span className="text-teal-500 font-bold">79 problems</span> in <span className="text-teal-500 font-bold">30 seconds</span>!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left flex flex-col justify-between">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              University
            </h1>
            <p>
              I started studying Computer Science at the University of Waterloo in September 2023. Since then, I have participated in multiple clubs, such as the
              <span className="text-teal-500 font-bold"> UW CSC</span>, <span className="text-teal-500 font-bold">UW PSA</span> and the <span className="text-teal-500 font-bold">UW Cricket Club</span>.
            </p>
            <br />
            <p>
              Here are some of the courses I have taken: <span className="text-teal-500 font-bold">Linear Algebra</span>, <span className="text-teal-500 font-bold">Calculus I + II</span>,
              <span className="text-teal-500 font-bold"> Algorithm Design</span>, <span className="text-teal-500 font-bold">Software Development Techniques</span>.
            </p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default EducationSection;