'use client'
import React, {useState} from 'react'
import { MidCatchChatYellow, MidCatchChatRed} from "../../components/midCatchChat";
import {GenSideBarLinks,RequestAppointmentSide} from "../../components/genSideBar";
import {Headers} from "../../components/header/Headers";
import {EyeCatch} from "../../components/pageEyeCatch/EyeCatch";
import {PlayItSafe} from "../../components/bottomEyeCatch/PlayItSafe";
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import {MainGeneralContactUsComponent} from "../../components/GeneralContactUsComponents/MainGeneralContactUsComponent";
import { ServiceTheseBrands} from "../../components/bottomEyeCatch/ServiceTheseBrands"
import { MyFooter} from "../../components/MyFooter";

const montserrat = Montserrat({ subsets:['latin'] });

function page() {
  const [highlightInput, setHighlightInput] = useState(false);
  
  const handleButtonClick = () => {
    setHighlightInput(true);
    setTimeout(() => {
      setHighlightInput(false);
    }, 4);
  };

  return (
    <div className={`${montserrat.className}`}> 
      <a href="tel:919-557-4477">
        <div className=' bg-black  text-yellow-400 text-center py-2 visible lg:hidden '> 
          (919)-557-447
        </div>
      </a>
      <Headers />
        <EyeCatch highlightInput={highlightInput}/>
        <div className='bg-white text-black relative mt-10 flex flex-col text-center md:flex-row lg:px-40 pb-3'>
        {/* split this please */}
          <div className='lg:w-1/4 md:2/3'>
          {/* Right hand side */}
            <GenSideBarLinks/>
            
            <RequestAppointmentSide onButtonClick={handleButtonClick}/>
          </div>
          <div className='lg:w-3/4'>
          {/* -.9  top -1.8 left */}
            {/* Left hand side */}
            <div className='p-6'>
              <p className='capitalize text-orange-300 text-4xl font-bold'> generator installation and Replacement</p>
              <div>  
               <div className="w-96 h-8 left-[118.4px] md:left-[332px] lg:left-[960.2px] top-[839.6px] md:top-[132.7px] lg:top-[84.8px] absolute text-orange-300 text-3xl font-bold "><h3>Keeping The Power On When You Need It</h3></div>
               <div className="w-96 h-8 left-[116.6px] md:left-[330.2px] lg:left-[958.4px] top-[838.7px]  md:top-[131.8px] lg:top-[83.9px] absolute text-black text-3xl font-bold ">Keeping The Power On When You Need It</div>
            </div>
            {/* image here */}
            <Image
              className='mt-32 lg:ml-60'
              src="/Generators/Installation/GeneratorImage.webp"
              width={600}
              height={600}

            />
              <div className="h-9 relative mt-3">
                <p className='mt-3 text-left pl-4 text-orange-300 text-3xl font-bold absolute left-[43.19px] md:left-[71px] lg:left-[310.2px] top-[531px] md:top-[595px] lg:top-[408px]  '>Expert Generator Installation 1 </p>
                <p className='mt-3 text-left pl-4 text-black text-3xl font-bold absolute left-[41.39px] md:left-[69.2px] lg:left-[308.2px] top-[530.1px] md:top-[594.1px] lg:top-[407.2px]  '>Expert Generator Installation 1 </p>
              </div>
              <div className=" h-9 relative mt-3">
                <p className='mt-3 text-left pl-4 text-orange-300 text-3xl font-bold absolute left-[43.19px] md:left-[71px] lg:left-[310.2px] top-[731px] md:top-[835px] lg:top-[484px]  '>Expert Generator Installation 2</p>
                <p className='mt-3 text-left pl-4 text-black text-3xl font-bold absolute left-[41.39px] md:left-[69.2px] lg:left-[308.2px] top-[730.1px] md:top-[834.1px] lg:top-[483.1px]  '>Expert Generator Installation 2</p>
              </div>
            </div>
          
          <p className='p-6 text-left   leading-relaxed'>
            We know that you and your family depend on electricity to power your life.
             We also know that there are times your home and business deal with power 
             loss that can last days and even weeks. Don’t let unexpected power loss stop 
             your daily life and let PowerMaster install or replace your current generator
              with a brand-new reliable generator that fits your households needs. Our expert team 
              is versed on the latest and greatest generators to not only make sure we suggest the 
              best one for your family but stay in your budget also. Reach out to a member of our generator
               team today for a free, no obligation generator consultation today!</p>
            <MidCatchChatYellow/>
            <div>
             
             
            </div>
            <p className='p-6 text-left mt-20'>z
            Our expert team is ready to handle and wire your new generator directly
             into your service panel or transfer switch. Doing this will make 
             sure that the electricity is transferred safely into the home and 
             prevent generator overload. Not installing a generator properly can
              result in back firing, back feeding, carbon monoxide and other 
              hazards, so make sure you have your generator installed by a 
              certified professional every time.
            </p>

            <p className='p-6 text-left mt-14 md:mt-10 lg:mt-2'>
              Have The Experts Install Your New Generator!
              At PowerMaster Electric,  your safety and  satisfaction are our highest priority .
              We are a full-service Generac generator installer. Please consider Powermaster Electric for your generator 
              purchase, installation, maintenance and/or repair.
            </p>

            <MidCatchChatRed/>
          </div>
          {/* LEFT HAND SIDE  */}
        </div>
          <PlayItSafe/>
          <MainGeneralContactUsComponent/>
          <ServiceTheseBrands/>
          <MyFooter/>
    </div>
  )
}

export default page