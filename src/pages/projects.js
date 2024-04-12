import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/project1.jpg";
import project2 from "../../public/images/projects/project2.jpg";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import project5 from "../../public/images/projects/project5.jpg";
import project6 from "../../public/images/projects/project6.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="project"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
            <FeaturedProject 
                         title=" E-commerce Website Development"
                         img={project1}
                         summary=" Creating a functional e-commerce website is a substantial undertaking that involves various components. You’ll need to design an intuitive user interface, develop a secure payment processing system, and integrate a comprehensive product management system. Focusing on features like product listings allows you to explore database design while shopping carts and user accounts introduce you to user authentication and session management. The importance of this project lies in understanding how to create an online marketplace."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project 
                         title="Inventory Management System"
                         img={project2}
                         summary=" An inventory management system is essential for businesses, and creating one offers insights into database management and supply chain operations. You’ll need to design a system that tracks inventory levels, manages orders, and automates restocking processes. This project exposes you to the challenges of real-time data updates and order fulfillment, teaching you about efficient resource management."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project 
                         title="  E-Learning Platform"
                         img={project3}
                         summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
            <div className="col-span-12">
            <FeaturedProject 
                         title=" Real-time Traffic Monitoring System"
                         img={project4}
                         summary=" A real-time traffic monitoring system collects and displays live traffic data to help users plan their routes efficiently. This project requires integrating data from various sources and visualizing it in real time. It addresses the importance of traffic management and smart transportation systems in urban areas, emphasizing user convenience and safety. However, this is one of the best mini project ideas for IT students. "
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project 
                         title=" Online Quiz Game"
                         img={project5}
                         summary=" Online Quiz Game is one of the simple mini project ideas for IT students. Developing an online quiz game allows users to test their knowledge and compete with others. Features like categories, questions, and a leaderboard create a competitive and engaging experience. This project emphasizes the educational and entertainment aspects of technology, showcasing the potential for interactive learning and friendly competition."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project 
                         title=" Online Food Ordering System"
                         img={project6}
                         summary=" The online food ordering system project is an excellent opportunity to explore the intricacies of web application development. It involves designing an intuitive menu browsing system, integrating user reviews and ratings, and implementing order tracking and delivery features. This project reflects real-world applications in the food delivery industry, highlighting the importance of usability and user feedback in web application design. However, this is one of the best mini project ideas for IT students. "
                          link="/"
                          github="/"
                          type="Featured project"
                          />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
