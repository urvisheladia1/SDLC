import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
                      type="Bachelor's In Computer Engineering" 
                      time="2018-2022"
                      place="Indus Univesity"
                      info="A highly motivated and detail-oriented computer engineering graduate with a passion for solving complex problems and developing innovative solutions. Seeking opportunities to apply my technical skills and knowledge in a dynamic and challenging environment."
                  />
                  <Details
                      type="Master's In Computational Science" 
                      time="2023 present"
                      place="Laurentian University"
                      info="A Master's degree in Computational Science is an interdisciplinary program that combines elements of computer science, mathematics, and scientific disciplines to solve complex problems through computational methods."
                  />
                  <Details
                      type="Web Development" 
                      time="2020-2020"
                      place="Internshala"
                      info="Successfully completed a six weeks online certified training on Web Development. The training consisted of HTML &
                      CSS, Bootstrap, SQL and PHP modules. In the final assessment.
                      "
                      />
                  <Details
                      type="Data Science" 
                      time="2020-2020"
                      place="Coursera"
                      info="Successfully completed a six weeks online certified training on Data Science. The training consisted of Introduction to
                      Data Science, Python for Data Science, Understanding the Statistics for Data Science and Predictive Modeling and
                      Basics of Machine Learning modules. In the final assessment."
                      />
                  <Details
                      type="Graphic Design" 
                      time="Intershala"
                      place="Laurentian University"
                      info="Successfully completed a six weeks online certified training on Graphic Design. The training consisted of Fundamentals
                      of Graphic Design, Photoshop- Interface and Tools, Workflow and Photo Correction in Photoshop, Effects and Techniques
                      in Photoshop and Beauty Techniques in Photoshop modules."
                      />
        </ul>
      </div>
    </div>
  );
};

export default Education;
