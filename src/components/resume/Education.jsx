import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"


const Education = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
         className="w-full flex gap-20">
           
        <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
     <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
     <h2 className="text-4xl font-bold">Educational Quality </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
         title="Computer Science & Engineering"
         subTitle="Presidency University (2020-2023)"
         result="3.27"
         des="I design, develop, and optimize computing systems and software solutions. My expertise is data structures, software engineering"
         />
          <ResumeCard
         title="WEB Development Course"
         subTitle="Programming Hero"
         result="0403"
         des="Learning and Training, Coding and Programming, Development
Environment Familiarization Communication Skills & managing APIs "
         />
         {/* <ResumeCard
         title="Computer Science & Engineering"
         subTitle="Presidency University (2020-2023)"
         result="3.27"
         des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
         />  */}

         
         
        </div>
        </div>
       
        <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
     <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
     <h2 className="text-4xl font-bold">Job Experience </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
         title="Internship"
         subTitle="naztec (2023-2023)"
         result="Dhaka"
         des="Learning and Training, Coding and Programming, Development
Environment Familiarization Communication Skills.managing APIs,NoSQL databases"
         />
         {/* <ResumeCard
         title="Computer Science & Engineering"
         subTitle="Presidency University (2020-2023)"
         result="3.27"
         des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
         />
         <ResumeCard
         title="Computer Science & Engineering"
         subTitle="Presidency University (2020-2023)"
         result="3.27"
         des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
         /> */}

         
         
        </div>
        </div>
        </motion.div>
    );
};

export default Education;