'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ButtonEyeCatch } from './ButtonEyeCatch';
import { ContactUs } from '../contactUsComponents/ContactUs';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets:['latin'] });

export const EyeCatch = ({ highlightInput }) => {
  const pathname = usePathname();
  const [headerName, setHeaderName] = useState(null);
  const [subHeaderName, setSubHeaderName] = useState(null);

  useEffect(() => {
    if (pathname !== null) {
      if (pathname === "/generators/installation") {
        setHeaderName('Generators Installation');
        setSubHeaderName('Keep the Lights On!');
      }
    }
  }, []);

  return (
    <div>
      <div className={`relative pt-10 mt-16 lg:mt-28 ${montserrat.className} pb-14`}>
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/backgroundImages/Electrical-Services.jpg')",
            backgroundPosition: "center" // Move the image to the bottom
          }}
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent to-black opacity-95"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center text-center relative">
          <div className='relative'>
            <div className='justify-center'>
              <h1 className='text-4xl capitalize font-bold leading-10 mb-5 '  style={{ textShadow: '0px 0px 20px rgba(0, 0, 0, 1)' }}>
                {headerName}
              </h1>
              <div className="Pseudo w-24 h-2 bg-yellow-400 lg:ml-10 mx-auto " />
              <h4 className='mt-6 text-2xl capitalize font-bold text-yellow-300 lg:text-left pl-10'  style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.8)' }}>
                {subHeaderName}
              </h4>
            </div>
            <div className='flex  flex-col items-center md:flex-row gap-x-10 mb-6 lg:mr-8 md:ml-36 lg:ml-9'>
              <ButtonEyeCatch text="Maintenance" image="/EyeCatchButtonIcons/electrician_icon.webp" />
              <ButtonEyeCatch text="Repair" image="/EyeCatchButtonIcons/electrician_tools_icon.webp"/>
              <ButtonEyeCatch text="Installation" image="/EyeCatchButtonIcons/fusebox_icon.webp"/>
            </div>
          </div>
          <div className='text-center'>
            <div className='mx-auto w-2/3'>
              <p className='text-4xl mb-3 uppercase whitespace-break-spaces font-bold drop-shadow-lg' style={{ textShadow: '0px 0px 20px rgba(0, 0, 0, 1)' }}>
                Looking for <span style={{ color: "#FF9A68" }}>Generator Installation</span>?
              </p>
            </div>
            <p className='text-2xl mb-3 capitalize' style={{ textShadow: '0px 0px 20px rgba(0, 0, 0, 1)' }}>Get Your FREE estimate today!</p>
            <ContactUs highlightInput={highlightInput}/>
          </div>
        </div>
      </div>
    </div>
  );
};
