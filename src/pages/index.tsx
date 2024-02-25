import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
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
          <Projects />
        ) : (
          <Contact />
        )}
      </div>
      <p>h</p>
    </div>
  );
}
