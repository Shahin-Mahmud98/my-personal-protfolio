import { useState } from "react";
import Title from "../../Layout/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievement from "./Achievement";


const Resume = () => {
  const [educationData,setEducationData]=useState(true);
  const [skillData,setSkillData]=useState(false);
  const [experienceData,setExperienceData]=useState(false);
  const [achievementData,setAchievementData]=useState(false);
    return (
        <section id="resume"
        className="w-full py-20 border-b-[1px] border-black">
            <div className="flex justify-center items-center text-center">
           <Title 
            title="1 Years Internship Experience"
            des="My Resume"
            />
           </div>
           <div>
            <ul className="w-full grid grid-cols-4">
                <li onClick={() =>
                  setEducationData(true) &
                  setSkillData(false) &
                  setExperienceData(false) &
                  setAchievementData (false)
                 }
                 className={`${
                  educationData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}>
                  Education</li>
                <li
                onClick={() =>
                  setEducationData(false) &
                  setSkillData(true) &
                  setExperienceData(false) &
                  setAchievementData (false)
                 }
                 className={`${
                  skillData ? "border-designColor rounded-lg" : "border-transparent"
                } resumeLi`}
              >
                Professional Skills</li>
                <li onClick={() =>
                  setEducationData(false) &
                  setSkillData(false) &
                  setExperienceData(true) &
                  setAchievementData (false)
                 }
                 className={`${
                  experienceData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}
              >
                Experience</li>
                <li 
                onClick={() =>
                  setEducationData(false) &
                  setSkillData(false) &
                  setExperienceData(false) &
                  setAchievementData (true)
                 }
                 className={`${
                  achievementData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}
              >
                Achievements</li>
            </ul>
           </div>
           {
            educationData && <Education/>
           }
           {
            skillData && <Skills/>
           }
           {
            experienceData && <Experience/>
           }
           {
            achievementData && <Achievement/>
           }
           {/* <Education/> */}
           {/* <Skills/> */}
           {/* <div className="w-full flex gap-20">
           
           <div>
           <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
        <h2 className="text-4xl font-bold">Educational Quality </h2>
           </div>
           <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
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
            />
            <ResumeCard
            title="Computer Science & Engineering"
            subTitle="Presidency University (2020-2023)"
            result="3.27"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />

            ResumeCard
            
           </div>
           </div>
          
           <div>
           <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
        <h2 className="text-4xl font-bold">Job Experience </h2>
           </div>
           <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
            title="Internship"
            subTitle="naztec (2023-2023)"
            result="Dhaka"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />
            <ResumeCard
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
            />

            ResumeCard
            
           </div>
           </div>
           </div> */}
          
        </section>
    );
};

export default Resume;