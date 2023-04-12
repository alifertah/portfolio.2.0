import Navbar from "@/components/navbar";
import Whoami from "@/components/whoami";
import { useState } from "react";

export default function Home() {
  const [act, setAct] = useState("whoAmI");

  return (
    <div className="flex flex-col-reverse h-screen justify-between">
      <Navbar act={act} setAct={setAct} />
      <div>
        {act === "skills" ? (
          "yes"
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
