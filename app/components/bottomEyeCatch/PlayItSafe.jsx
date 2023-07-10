import React from 'react';
import { ReassuranceBox } from "./ReassuranceBox";

export const PlayItSafe = () => {
  const reassuranceBoxes = [
    {
      image: "/ReassuranceImages/Satisfaction_Guarantee.webp",
      title: (
        <>
          100% Satisfaction
          <br />
          Guarantee
        </>
      ),
      bodyText: (
        <>
          You’ll get an extra level of
          <br />
          protection and peace of
          <br />
          mind with our UWin
          <br />
          Guarantee.
        </>
      ),
    },
    {
      image: "/ReassuranceImages/24_7-204x300.webp",
      title: (
        <>
          24/7 Emergency
          <br />
          Services
        </>
      ),
      bodyText: (
        <>
          Our electricians are here <br />
          for you, no matter the time <br />
          of day... or night!
        </>
      ),
    },
    {
      image: "/ReassuranceImages/Local_Electrician-You-Can-Trust.webp",
      title: (
        <>
          Local Electricians
          <br />
          You Can Trust
        </>
      ),
      bodyText: (
        <>
          All PowerMaster Techs are <br />
          trained, licensed, insured, <br />
          and local
        </>
      ),
    },
    {
      image: "/ReassuranceImages/StraightForward-Pricing.webp",
      title: (
        <>
          StraightForward
          <br />
          Pricing
        </>
      ),
      bodyText: (
        <>
          We’ll give you options for <br />
          your services so you know <br />
          exactly what you're getting.
        </>
      ),
    },
  ];

  return (
    <div className="flex-col justify-center items-center bg-white w-full pt-4 lg:pl-96">
      <h2 className="text-center mb-5">
        <div className=" justify-center items-center inline-flex ">
          <div className=" text-orange-300 text-5xl font-bold leading-10 ">Play It Safe & Choose</div>
        </div>
        <div className=" text-black text-5xl font-bold leading-10">PowerMaster Electric</div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-9 w-auto lg:ml-80">
        {reassuranceBoxes.map((box, index) => (
          <ReassuranceBox
            key={index}
            image={box.image}
            title={box.title}
            bodyText={box.bodyText}
          />
        ))}
      </div>
    </div>
  );
};
