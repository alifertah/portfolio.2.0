import { useState } from "react"

const langs = ["JAVASCRIPT", "TYPESCRIPT", "C", "PYTHON"]
const frontEnd = ["REACT.JS/NEXT.JS", "TAILWINDCSS", "FRAMEMOTION", "CHARTJS"]
const tools = ["GIT", "VSCODE", "FIGMA", "GITHUB"]
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

    return(
        <div className="">
            <div className="flex justify-between w-full">
                 <span className={langsClass} onClick={handleLangsClick}> Langs </span>
                 <span className={frontendClass} onClick={handleFrontendClick}> Frontend </span>
                 <span className={toolsClass} onClick={handleToolsClick}> Tools </span>
            </div>
            <div className="flex flex-col justify-center font-bold italic text-left mt-5">
                {
                    activeTab === "langs" ? 
                        langs.map(lang =>(<div className="">{lang}</div>))
                    : (
                            activeTab === "frontend" ? (
                                frontEnd.map(front=>(<div>{front}</div>))
                            ) : (
                                activeTab === "tools" ? (
                                    tools.map(tool=>(<div>{tool}</div>))
                                ) : ('')
                            )
                    )
                }
            </div>
        </div>
    )
}
