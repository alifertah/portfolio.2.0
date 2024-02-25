import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navs = [
    {name: "WHO AM I?", link: "/",value:"whoAmI", id:1},
    {name: "SKILLS", link: "/", value:"skills", id:2},
    {name: "PROJECTS", link: "/", value:"projects",id:3},
    {name: "CONTACT", link: "/", value:"contact",id:3},
]

const LeftToRight = ( {children} : any )=>{
    return(
        <motion.div
        initial={{x:-400, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:.5}}
        >
        {children}
        </motion.div>
        )

}


export default function Navbar({act, setAct} : any){
    const [activeTab, setActiveTab] = useState()

    function activeId(activeTab : any){
        setAct(activeTab);
        console.log(act);
        console.log(activeTab);
    }

   
    return(
        <LeftToRight>
        <div  className="text-white flex justify-center text-xl">
            <div className="flex justify-between  bg-[#e71d36] py-6 px-6 rounded-t-lg  shadow-[4px_2px_60px_0px_rgba(231,29,54,3)]">
            {
                navs && navs.map((nav, id) => (
                    <Link  key={nav.id} onClick={()=> activeId(nav.value)}  className=" hover:text-[#011627] hover:scale-110 duration-300 px-5 mx-5" href={nav.link}>{nav.name}</Link>
                    ))
                }
            </div>
        </div>
                </LeftToRight>
    )
}