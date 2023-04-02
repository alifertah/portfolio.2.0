import Navbar from "@/components/navbar";
import Whoami from "@/components/whoami";
import { useState } from "react";

export default function Home() {
  const [act, setAct] = useState("hey");

  return (
   <div className="">
    <Navbar act={act} setAct={setAct}/>
    <Whoami act={act}/>
   </div>
  )
}
