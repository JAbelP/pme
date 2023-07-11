import React from 'react';
import Image from 'next/image';

export const ReassuranceBox = (props) => {
  return (
    <div className="text-black flex flex-col lg:flex-row items-center ">
      <div>
        <Image
          src={props.image}
          alt="Play It Safe"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <div className="text-black text-3xl font-semibold leading-9">
          {props.title}
        </div>
        <div className="text-black text-lg font-normal leading-snug">
          {props.bodyText}
        </div>
      </div>
    </div>
  );
};
