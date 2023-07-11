import React from 'react';
import HambugerMenu from '../Icons/HamburgerMenu';
import Image from 'next/image';

export const Headers = () => {
  return (
    <div className="bg-white text-black w-full pl-4 h-28 fixed top-0 z-50 border-b-black border-4">
      <div className="relative">
        <div className="flex flex-row items-start h-0">
          <Image
          alt='Power Master Electric '
          className=''
          src="/Logo/logo-powermaster-electric.webp"
          height={200}
          width={200}

          />
        </div>

        <div className="hidden lg:block absolute top-6 left-1/4 text-2xl font-semibold">
          <div className="flex flex-row gap-x-10">
            <div className="relative group">
              <p className="cursor-pointer hover:bg-yellow-400 pb-2 px-3">Generator</p>
              <div className="absolute top-8 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
                <p className="px-4 py-2 hover:bg-yellow-400">Service 1</p>
                <p className="px-4 py-2 hover:bg-yellow-400">Service 2</p>
              </div>
            </div>
            <div className="relative group">
              <p className="cursor-pointer hover:bg-yellow-400 pb-2 px-3">Generator</p>
              <div className="absolute top-8 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
                <p className="px-4 py-2 hover:text-white hover:bg-yellow-400">Service 1</p>
                <p className="px-4 py-2 hover:text-black hover:bg-yellow-400">Service 2</p>
              </div>
            </div>
            <p className="relative group cursor-pointer hover:bg-yellow-400 pb-2 px-3">
              Generator
            </p>
            <p className="relative group cursor-pointer hover:bg-yellow-400 pb-2 px-3">
              Generator
            </p>
          </div>
        </div>
        <div className="capitalize absolute right-10 pt-3 lg:flex lg:flex-row hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="4.5em" viewBox="0 0 384 512">
              <style>{`svg { fill: #fddf1c; }`}</style>
              <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <div>
            <div className="text-center text-black text-xl font-normal leading-tight">Need An Electrician?</div>
              <a href="tel:919-557-4477">
              <div className="text-black text-3xl font-semibold leading-loose">(919) 557-4477</div>
              </a>
        </div>
        </div>
      </div>

      <div className="text-center lg:hidden">
        <div className="flex">
          <HambugerMenu />
        </div>
      </div>
    </div>
  );
};
