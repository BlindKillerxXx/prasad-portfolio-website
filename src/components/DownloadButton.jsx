
import { Button } from '@mui/material';
import React, { useRef } from 'react';

import { resume } from '../assets';

const DownloadButton = () => {
  // const resumePath =  './';
  const linkRef = useRef(null);

  const downloadResume = () => {
    linkRef.current.href = resume;
    linkRef.current.download = 'Prasad_Resume.pdf';
    linkRef.current.click();
  };

  return (
    <div className='flex sm:mt-10'>
      <a ref={linkRef} style={{ display: 'none' }}></a>
      <button className=' bg-tertiary py-2 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white hover:text-black sm:mx-auto' onClick={downloadResume}>Download Resume</button>
      <button className=' bg-tertiary py-2 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white hover:text-black sm:mx-auto hidden sm:block'>
        <a href="#contact">Contact Me</a>
      </button>
    </div>
  );
};

export default DownloadButton;
