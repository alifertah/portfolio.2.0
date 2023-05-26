import { useState } from "react"
import { motion } from 'framer-motion'
import Image from "next/image"

const langs = [{name:"JAVASCRIPT", link:"/programmingIcons/javascript.svg"},
{name:"TYPESCRIPT", link:"/programmingIcons/typescript.svg"}, 
{name:"C", link:"/programmingIcons/c.svg"}, 
{name:"PYTHON", link:"/programmingIcons/python.svg"}, ]

const frontEnd = [{name:"REACT.JS/NEXT.JS", link:"/programmingIcons/react.svg"},
{name:"TAILWINDCSS", link:"/programmingIcons/tailwind.svg"},
{name:"FRAMEMOTION",link:"/programmingIcons/framerMotion.svg"},
{name:"CHARTJS", link:"/programmingIcons/chartJs.svg"}]

const tools = [{name:"GIT", link:"/programmingIcons/git.svg"},
{name:"GITHUB", link:"/programmingIcons/github.svg"},
{name:"VSCODE", link:"/programmingIcons/vscode.svg"},
{name:"FIGMA", link:"/programmingIcons/figma.svg"},
]

const activeSec = "bg-gradient-to-r from-[#e71d36] to-[#011627] cursor-pointer px-8 rounded-2xl py-1"
const notActiveSec = "cursor-pointer px-8 rounded-2xl py-1"

export default function Skills(){

    const [activeTab, setActiveTab] = useState("langs")
    const [langsClass, setLangsClass] = useState(activeSec);
    const [frontendClass, setFrontendClass] = useState(notActiveSec);
    const [toolsClass, setToolsClass] = useState(notActiveSec);
    
    function handleLangsClick() {
        setActiveTab("langs")
        setLangsClass(activeSec);
        setFrontendClass(notActiveSec);
        setToolsClass(notActiveSec);
      }
    
      function handleFrontendClick() {
        setActiveTab("frontend")
        setLangsClass(notActiveSec);
        setFrontendClass(activeSec);
        setToolsClass(notActiveSec);
      }
    
      function handleToolsClick() {
        setActiveTab("tools")
        setLangsClass(notActiveSec);
        setFrontendClass(notActiveSec);
        setToolsClass(activeSec);
      }
      const items = activeTab === "frontend" ? (frontEnd) : activeTab === "langs" ? (langs) : activeTab === "tools" ? (tools) : (frontEnd);
    return(
        <div className="">
            <div className="flex justify-between w-full">
                 <span className={langsClass} onClick={handleLangsClick}> Langs </span>
                 <span className={frontendClass} onClick={handleFrontendClick}> Frontend </span>
                 <span className={toolsClass} onClick={handleToolsClick}> Tools </span>
            </div>
            <motion.div
            initial={{x:-400, opacity:0}}
            animate={{x:0, opacity:1}}
            
            className="flex flex-col justify-center  font-bold italic text-left mt-5">
                {
                        items.map((item, key) =>(<div key={key} className="flex justify-between items-center mt-2">
                            <div  className="flex items-center">
                                {item.name}
                            </div>
                                <Image className="rounded" src={item.link} height="40" width="40" />
                            </div>))
                }
            </motion.div>
        </div>
    )
}
