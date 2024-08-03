import { IconContext } from "react-icons";
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import './sideNav.css';
import { MdBarChart } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { GrDocumentLocked } from "react-icons/gr";

const SideNav=()=>{
    return(
        <div className="sidenav-container">
             
            <div className="sideNav-icon">
            <IconContext.Provider value={{ color: "#7592f5", size: '30px', className: "global-class-name" }}>
            <IoMdHome />
            </IconContext.Provider>
            </div>
            <div  className="sideNav-icon">
            <IconContext.Provider value={{ color: "white", size: '30px', className: "global-class-name" }}>
            <MdBarChart />
            </IconContext.Provider>
            </div>
            <div  className="sideNav-icon">
            <IconContext.Provider value={{ color: "white", size: '30px', className: "global-class-name" }}>
            <CiBookmarkCheck />
            </IconContext.Provider>
            </div>
            <div className="sideNav-icon">
            <IconContext.Provider value={{ color: "white", size: '30px', className: "global-class-name" }}>
            <SlNotebook /> 
            </IconContext.Provider>
            </div>
            <div className="sideNav-icon">
            <IconContext.Provider value={{ color: "white", size: '30px', className: "global-class-name" }}>
            <GrDocumentLocked />
            </IconContext.Provider>
            </div>
            <div className="sideNav-icon">
            <IconContext.Provider value={{ color: "white", size: '30px', className: "global-class-name" }}>
            <IoMdLogOut />
            </IconContext.Provider>
            </div>
        </div>
    )
}
export default SideNav;