import { useState } from "react"

const heads = ["Langs", "Frontend", "Tools"]
const activeSec = "bg-gradient-to-r from-[#e71d36] to-[#011627] cursor-pointer px-8 rounded-2xl py-1"
const notActiveSec = "cursor-pointer px-8 rounded-2xl py-1"

export default function Skills(){

    const [langsClass, setLangsClass] = useState(activeSec);
    const [frontendClass, setFrontendClass] = useState(notActiveSec);
    const [toolsClass, setToolsClass] = useState(notActiveSec);
    
    function handleLangsClick() {
        setLangsClass(activeSec);
        setFrontendClass(notActiveSec);
        setToolsClass(notActiveSec);
      }
    
      function handleFrontendClick() {
        setLangsClass(notActiveSec);
        setFrontendClass(activeSec);
        setToolsClass(notActiveSec);
      }
    
      function handleToolsClick() {
        setLangsClass(notActiveSec);
        setFrontendClass(notActiveSec);
        setToolsClass(activeSec);
      }

    return(
        <div className="flex justify-center w-[30%]">
            <div className="flex justify-between w-full">
                 <span className={langsClass} onClick={handleLangsClick}> Langs </span>
                 <span className={frontendClass} onClick={handleFrontendClick}> Frontend </span>
                 <span className={toolsClass} onClick={handleToolsClick}> Tools </span>
            </div>
        </div>
    )
}