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
          des="  Users can signup, login, and log out from the site & also they add products, and manage their
add product like update ,delete . Users can also Shows Logged in user"
          src={Property}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Users can signup, login, and log out from the site & also they order products, and manage their
orders. Users can also give a review of the site which is shown on the homepage."
          src={Ema}
        />
        <ProjectsCard
          title="E-commerce Website Car"
          des="Users can signup, login, and log out from the site & also they order products, and manage their
orders. Users can also give a review of the site which is shown on the homepage.

- Admin can make another admin, manage all orders and products, and also add a new product to the
site.
"
          src={Exetic}
        />
        <ProjectsCard
          title="Builders Web App"
          des=" Users can signup, login, and log out from the site & also they add products, and manage their
add product like update ,delete . Users can also Shows Logged in user"
          src={Property}
        />
        <ProjectsCard
          title="E-commerce Website Car"
          des="Users can signup, login, and log out from the site & also they order products, and manage their
orders. Users can also give a review of the site which is shown on the homepage.

- Admin can make another admin, manage all orders and products, and also add a new product to the"
          src={Exetic}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Users can signup, login, and log out from the site & also they order products, and manage their
orders. Users can also give a review of the site which is shown on the homepage."
          src={Ema}
        />
      </div>
        </section>
    );
};

export default Projects;