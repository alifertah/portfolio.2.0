import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "testasdfasf",
      link: "#",
      description: "description"
    },
    {
      name: "test1",
      link: "#",
      desc: "description1"
    },
  ]

  const handleRightClick = () => {
    setCurrentIndex(currentIndex + 1 >= projects.length ? 0 : currentIndex + 1);
  };

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex - 1 <= 0 ? projects.length -1 : currentIndex - 1);
  };

  return (
    <div className='w-full'>
      <div className="flex w-[60%] items-center flex-row py-12">
      <Image alt="" className='cursor-pointer' onClick={handleLeftClick} src="/angle-left.svg" width={40} height={40}/>
          <div className="w-[70%]">
          <p className="text-xl tracking-wide leading-relaxed mr-4">
            {projects[currentIndex].desc}
          </p>
          </div>
          <div className="flex justify-around items-center ml-4 py-4 w-[40%] rounded-lg shadow-[4px_15px_40px_10px_rgba(0,128,128,3)] cursor-pointer shadow-xl bg-sky-500 hover:bg-sky-700 duration-1000 ">
              <p>{projects[currentIndex].name}</p>
              <a href={projects[currentIndex].link} className="bg-sky-700 hover:bg-sky-400 duration-1000 p-2 rounded-[50%] " >
                {/* <AiOutlineLink /> */}
                go
              </a>
          </div>
      <Image alt="" className='cursor-pointer' onClick={handleRightClick} src="/angle-right.svg" width={40} height={40}/>
        </div>
    </div>
  );
}
