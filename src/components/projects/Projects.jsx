import Title from "../../Layout/Title";
import {  Property, Ema, Exetic } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <section id="projects"
        className="w-full py-20 border-b-[1px] border-black"
        >
           <div className="flex justify-center items-center text-center">
           <Title 
            title="VISIT MY PROTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
            />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Builders Web App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Property}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Ema}
        />
        <ProjectsCard
          title="E-commerce Website Car"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Exetic}
        />
        <ProjectsCard
          title="Builders Web App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Property}
        />
        <ProjectsCard
          title="E-commerce Website Car"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Exetic}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Ema}
        />
      </div>
        </section>
    );
};

export default Projects;