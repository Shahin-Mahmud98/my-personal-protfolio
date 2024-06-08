// eslint-disable-next-line no-unused-vars
import { Link } from "react-scroll";
import {profile} from "../../assets/index"
import { navLinksdata } from "../../constants";
const Navbar = () => {
    return (
        <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
           <div className="w-[85px] h-[96px]">
            <img src={profile} alt="profile" />
           </div>
           <div>
           <ul className="flex items-center gap-10">
                    {navLinksdata.map(({_id,title,link}) => (
                        <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                         key={_id}> 
                            <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
                        </li>
                    ))}
            </ul>
           </div>
        </div>
    );
};

export default Navbar;