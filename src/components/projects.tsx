import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/alifertah/repos');
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);

  const handleRightClick = () => {
    setCurrentIndex(currentIndex + 1 >= repos.length ? 0 : currentIndex + 1);
  };

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex - 1 <= 0 ? repos.length -1 : currentIndex - 1);
  };

  return (
    <div className='flex justify-between'>
      <Image className='cursor-pointer' onClick={handleLeftClick} src="/angle-left.svg" width={40} height={40}/>
      <div>
        <h1>alifertah's Repositories:</h1>
        <p>{repos[currentIndex]?.name}</p>
      </div>
      <Image className='cursor-pointer' onClick={handleRightClick} src="/angle-right.svg" width={40} height={40}/>
    </div>
  );
}
