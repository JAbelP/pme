import React from 'react'

import { MidCatchChatYellow, MidCatchChatRed} from "../../components/midCatchChat";

import {GenSideBarLinks,RequestAppointmentSide} from "../../components/genSideBar";
import {Headers} from "../../components/header/Headers";
import {EyeCatch} from "../../components/pageEyeCatch/EyeCatch";
import {PlayItSafe} from "../../components/bottomEyeCatch/PlayItSafe";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets:['latin'] });

function page() {
  return (
    <div className={`${montserrat.className}`}> 
      <a href="tel:919-557-4477">
        <div className=' bg-black  text-yellow-400 text-center py-2 visible lg:hidden '> 
          (919)-557-447
        </div>
      </a>
      <Headers/>
      
       <EyeCatch/>
        <div className='bg-white text-black relative mt-10 flex flex-col text-center sm:flex-row lg:px-40 pb-3'>
        {/* split this please */}
          <div className='lg:w-1/4 md:2/3'>
          {/* Right hand side */}
            <GenSideBarLinks/>
            
            <RequestAppointmentSide/>
          </div>
          <div className='lg:w-3/4'>
            {/* Left hand side */}
            <div className='p-6'>
              <p className='capitalize text-orange-300 text-4xl font-bold'> generator installation and Replacement</p>
              <div className=" w-96 h-9 relative">
                <div className="w-96 h-8 left-0 top-0 md:left-[44px] lg:left-[384px] absolute text-orange-300 text-3xl font-bold leading-loose"><h3>Keeping The Power On When You Need It</h3></div>
                <div className="w-96 h-8 left-[-1.80px] top-[-0.90px]  md:left-[42.2px] lg:left-[382.2px] absolute text-black text-3xl font-bold leading-loose">Keeping The Power On When You Need It</div>
              </div>
            </div>
          {/* [TODO:] PHOTO HERE */}
          <p className='p-6 text-left mt-10  leading-relaxed'>
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
              <p className='mt-3 text-left pl-4 text-orange-300 text-3xl font-bold absolute left-[320px] md:left-[264px] lg:left-[906px] top-[837px] md:top-[754px] lg:top-[534px]  '>Expert Generator Installation</p>
              <p className='mt-3 text-left pl-4 text-black text-3xl font-bold absolute left-[318.20px] md:left-[262.20px] lg:left-[904.20px] top-[836.10px] md:top-[753.10px] lg:top-[533.10px]  '>Expert Generator Installation</p>
            </div>
            <p className='p-6 text-left mt-20'>
            Our expert team is ready to handle and wire your new generator directly
             into your service panel or transfer switch. Doing this will make 
             sure that the electricity is transferred safely into the home and 
             prevent generator overload. Not installing a generator properly can
              result in back firing, back feeding, carbon monoxide and other 
              hazards, so make sure you have your generator installed by a 
              certified professional every time.
            </p>
            <div>
            <p className='mt-3 text-left pl-4 text-orange-300 text-3xl font-bold absolute left-[320px] md:left-[264px] lg:left-[906px] top-[1170px] md:top-[1022.1px] lg:top-[675.1px]  '>Expert Generator Installation 2</p>
            <p className='mt-3 text-left pl-4 text-black text-3xl font-bold absolute left-[318.20px] md:left-[262.20px] lg:left-[904.20px] top-[1169.1px] md:top-[1021.2px] lg:top-[675.10px]  '>Expert Generator Installation 2</p>

            </div>
            <p className='p-6 text-left mt-14 md:mt-5 lg:mt-2'>
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
    </div>
  )
}

export default page