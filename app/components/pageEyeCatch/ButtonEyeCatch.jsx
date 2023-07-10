import Image from 'next/image';
import React from 'react';

export const ButtonEyeCatch = (props) => {
  return (
    <div className='flex flex-col items-center justify-center text-center '>
      <button className='bg-yellow-300 h-32 w-32 text-black mt-7 rounded-full mb-3'>
        <div className='flex items-center justify-center h-full'>
          <Image src={props.image} alt={props.alt} width={57} height={57} />
        </div>
      </button>
      <div className='text-center text-white text-lg font-normal uppercase leading-loose'>
        <h5>{props.text}</h5>
      </div>
    </div>
  );
};
