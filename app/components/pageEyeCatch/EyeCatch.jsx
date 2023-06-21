"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ButtonEyeCatch } from './ButtonEyeCatch';
// import { ContactUs } from '../contactUsComponents/ContactUs';

export const EyeCatch = () => {
  const pathname = usePathname();
  const [headerName, setHeaderName] = useState(null);
  const [subHeaderName, setSubHeaderName] = useState(null);

  useEffect(() => {
    console.log("Params:", { pathname });
    if (pathname !== null) {
      if (pathname === "/generators/installation") {
        setHeaderName('Generators Installation');
        setSubHeaderName('Keep the Lights On!');
      }
    }
  }, []);

  return (
    <div>
      <div className='relative pt-10'>
        <div
          className='absolute inset-0 bg-cover bg-center h-[75rem] md:h-[45rem] lg:h-[25rem]'
          style={{ backgroundImage: "url('/backgroundImages/Electrical-Services.jpg')" }}
        >
          <div className='h-full w-full bg-gradient-to-b from-transparent to-black opacity-50'></div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center text-center items-center relative'>
          <div className='relative'>
            <div className='justify-center'>
              <h1 className='text-4xl capitalize'>
                {headerName}
              </h1>
              <div className='content-center '>
                <div className='h-2 w-28 bg-yellow-500 mt-5 absolute md:left-48 md:top-7 left-32 top-16 '>&nbsp;</div>
                <h4 className='mt-6 text-2xl capitalize'>
                  {subHeaderName}
                </h4>
              </div>
            </div>
            <div className='flex  flex-col items-center md:flex-row gap-x-10 mb-6 md:mr-8'>
              <ButtonEyeCatch />
              <ButtonEyeCatch />
              <ButtonEyeCatch />
            </div>
          </div>
          <div className='text-center'>
            <p className='text-4xl mb-3 uppercase'> Looking for GENERATOR SERVICES?</p>
            <p className='text-2xl mb-3'> Contact Us Today</p>
            {/* <ContactUs pathname={pathname} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
