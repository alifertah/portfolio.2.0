import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "test",
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
    <div className='flex justify-between'>
      <Image alt="" className='cursor-pointer' onClick={handleLeftClick} src="/angle-left.svg" width={40} height={40}/>
      <div>
        <h1>{projects[currentIndex].name}</h1>
        <p>Project name</p>
      </div>
      <Image alt="" className='cursor-pointer' onClick={handleRightClick} src="/angle-right.svg" width={40} height={40}/>
    </div>
  );
}
