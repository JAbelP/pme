import Image from 'next/image';
import React from 'react';

export const ServiceTheseBrands = () => {
  return (
    <div className='pb-20 pt-20 text-black bg-white'>
      <div className='text-center text-5xl font-bold leading-10 px-5'>
        We Service These Brands
      </div>
      <div className='mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-8 border-b-4 border-stone-300'>
        <Image
          src='/Brands/genera_Logo.webp'
          width={300}
          height={100}
          alt='we service Genera'
        />
        <Image
          src='/Brands/0Uvjhgc2-150x150-1.webp'
          width={300}
          height={100}
          alt='we service cummins'
        />
        <Image
        className='pb-6'
          src='/Brands/Blue-Star-Logo-Color.webp'
          width={300}
          height={100}
          alt='we service Blue Star'
        />
      </div>
      
    </div>
  );
};
