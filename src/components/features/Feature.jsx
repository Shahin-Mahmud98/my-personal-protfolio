import Title from "../../Layout/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile,FaGlobe,FaBars } from "react-icons/fa";
import { SiProgress,SiAntdesign } from "react-icons/si";


const Feature = () => {
    return (
        <section id="features" className="w-full  py-20 border-b-[1px] border-b-black">
       <Title title ="Features" des ="what I do"/>
       <div className="grid grid-cols-3 gap-20">
        <Card title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<AiFillAppstore/>}
        />
        
        <Card 
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<FaMobile/>}
        />
        <Card
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<FaGlobe/>}
        />
        <Card
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<FaBars />
        }
        />
        <Card
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<SiProgress/>}
        />
        <Card
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!"
        icon={<SiAntdesign/>}
        />
       
       </div>
       </section>
    );
};

export default Feature;