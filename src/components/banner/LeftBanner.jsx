import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
// import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer."],
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
        <p> My role involves working with a variety of technologies and programming languages to ensure seamless user experiences 
and efficient server-side functionality. On the front-end, I create responsive and dynamic interfaces using HTML, CSS, 
and JavaScript frameworks such as React. On the back-end, Node.js, and SQL or NoSQL databases.</p>

<a href="https://drive.google.com/file/d/1fKZtmZAfPEyoLs9UU5gQSyj_5B0-pMq-/view" target="_blank">
    <button className="mt-14 text-white h-[50px] w-[150px] bg-designColor rounded-lg">Download Resume</button>
</a>
        <Media/>
       </div>
    );
};

export default LeftBanner;