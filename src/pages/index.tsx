import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Whoami from "@/components/whoami";
import { useState } from "react";

export default function Home() {
  const [act, setAct] = useState("whoAmI");

  return (
    <div className="flex flex-col-reverse h-screen justify-between ">
      <Navbar act={act} setAct={setAct} />
      <div className="w-full flex justify-center items-center text-center text-xl text-white ">
        {act === "skills" ? (
          <Skills />
        ) : act === "whoAmI" ? (
          <Whoami />  
        ) : act === "projects" ? (
          "projects"
        ) : (
          "hadallah"
        )}
      </div>
      <p>h</p>
    </div>
  );
}
