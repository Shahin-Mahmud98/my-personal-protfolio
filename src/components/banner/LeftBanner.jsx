import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
// import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    return (
        <div className="flex flex-col gap-3">
        <h4 className="mt-10 text-lg font-normal">WELCOME TO MY PROTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
            Hi, I'm 

            <span className="text-designColor capitalize"> Md Shahin Mahmud</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores sint distinctio voluptas maxime, dolorem excepturi ut beatae rem dolorum!</p>
        <Media/>
       </div>
    );
};

export default LeftBanner;