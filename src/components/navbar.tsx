import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navs = [
    {name: "WHO AM I?", link: "/",value:"whoAmI", id:1},
    {name: "SKILLS", link: "/", value:"skills", id:2},
    {name: "PROJECTS", link: "/", value:"projects",id:3},
]


export default function Navbar({act, setAct} : any){
    const [activeTab, setActiveTab] = useState()

    function activeId(activeTab : any){
        setAct(activeTab);
        console.log(act);
        console.log(activeTab);
    }

    return(
        <div  className="text-white sticky top-0 z-10 backdrop-filter backdrop-blur-md flex justify-between items-center py-4 px-3">
            <h1 className="text-xl font-bold animate-bounce">Ali Fertah</h1>
            <div className="flex justify-between w-[20%]">
            {
                navs && navs.map((nav, id) => (
                        <Link key={nav.id} onClick={()=> activeId(nav.value)}  className="hover:text-sky-300 hover:scale-110 duration-300" href={nav.link}>{nav.name}</Link>
                ))
            }
            </div>
        </div>
    )
}