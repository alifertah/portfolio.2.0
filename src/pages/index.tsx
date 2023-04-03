import Navbar from "@/components/navbar";
import Whoami from "@/components/whoami";
import { useState } from "react";

export default function Home() {
  const [act, setAct] = useState("whoAmI");

  return (
   <div className="">
    <Navbar act={act} setAct={setAct}/>
    <div>Hello {act === "skills" ? ("yes") : (act==="whoAmI" ? ("na3am") : (act === "projects") ? ("projects") : ("hadallah")) }</div>
    <Whoami />
   </div>
  )
}
