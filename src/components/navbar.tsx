import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navs = [
    {name: "WHO AM I?", link: "/"},
    {name: "SKILLS", link: "/"},
    {name: "PROJECTS", link: "/"},
]

// function alertMsg(msg : any){

// }

export default function Navbar(){
    const [tab, setTab] = useState("0")
    return(
        <div  className="text-white sticky top-0 z-10 backdrop-filter backdrop-blur-md flex justify-between items-center py-4 px-3">
            <h1 className="text-xl font-bold animate-bounce">Ali Fertah</h1>
            <div className="flex justify-between w-[20%]">
            {
                navs.map((nav) => (
                        <Link  className="hover:text-sky-300 hover:scale-110 duration-300" href={nav.link}>{nav.name}</Link>
                ))
            }
            </div>
        </div>
    )
}