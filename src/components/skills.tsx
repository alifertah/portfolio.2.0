import { useState } from "react"

const langs = ["Javascript", "C", "PYTHON"]
const activeSec = "bg-gradient-to-r from-[#e71d36] to-[#011627] cursor-pointer px-8 rounded-2xl py-1"
const notActiveSec = "cursor-pointer px-8 rounded-2xl py-1"

export default function Skills(){

    const [activeTab, setActiveTab] = useState("Langs")
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
            <div className="">
                {
                    activeTab === "langs" ? 
                        langs.map(lang =>(<div className="font-bold italic text-left">{lang}</div>))
                    : (
                            activeTab === "frontend" ? ("frontend") : (
                                activeTab === "tools" ? ("tools") : ('')
                            )
                    )
                }
            </div>
        </div>
    )
}
