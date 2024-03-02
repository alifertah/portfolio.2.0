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
      description: "description1"
    },
  ]

  const handleRightClick = () => {
    setCurrentIndex(currentIndex + 1 >= projects.length ? 0 : currentIndex + 1);
  };

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex - 1 <= 0 ? projects.length -1 : currentIndex - 1);
  };

  return (
    <div className='flex justify-center items-center w-[80%]'>
      <div className="flex items-center justify-between flex-row w-[100%]">
        <div onClick={handleLeftClick} className='flex items-center justify-center cursor-pointer'>
          <Image alt="" className='cursor-pointer' src="/angle-left.svg" width={40} height={40}/>
          <span>previous</span>
        </div>
        <div onClick={handleRightClick} className='flex items-center cursor-pointer'>
          <span>next</span>
          <Image alt="" className='cursor-pointer' src="/angle-right.svg" width={40} height={40}/> 
        </div>
      </div>
    </div>
  );
}
