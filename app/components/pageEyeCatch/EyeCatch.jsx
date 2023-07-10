'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ButtonEyeCatch } from './ButtonEyeCatch';
import { ContactUs } from '../contactUsComponents/ContactUs';
import {  Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets:['latin'] });

export const EyeCatch = () => {
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
      <div className={`relative pt-10 ${montserrat.className}`}>
        <div
          className="absolute inset-0 bg-cover bg-center h-[75rem] md:h-[45rem] lg:h-[25rem]"
          style={{ backgroundImage: "url('/backgroundImages/Electrical-Services.jpg')" }}
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center text-center items-center relative">
          <div className='relative'>
            <div className='justify-center'>
              <h1 className='text-4xl capitalize  font-bold leading-10 mb-5'>
                {headerName}
              </h1>
              <div className="Pseudo w-24 h-2 bg-yellow-400 ml-10" />
                <h4 className='mt-6 text-2xl capitalize font-bold text-yellow-300'>
                  {subHeaderName}
                </h4>
            </div>
            <div className='flex  flex-col items-center md:flex-row gap-x-10 mb-6 md:mr-8'>
              <ButtonEyeCatch />
              <ButtonEyeCatch />
              <ButtonEyeCatch />
            </div>
          </div>
          <div className='text-center'>
            <div className='mx-auto w-2/3'>
              <p className='text-4xl mb-3 uppercase whitespace-break-spaces font-bold'>
                Looking for <span style={{ color: "#FF9A68" }}>Generator Installation</span>?
              </p>
            </div>
            <p className='text-2xl mb-3 capitalize'>Get Your FREE estimate today!</p>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};
