import React from 'react'
// import {EyeCatch} from "../../components/pageEyecatch/EyeCatch"

import { MidCatchChatYellow, MidCatchChatRed} from "../../midCatchChat"

// import {GenSideBarLinks,RequestAppointmentSide} from "../../components/genSideBar"
// import {Headers} from "../../components/header/Headers"
// import {Reassurance} from "../../components/bottomEyeCatch/Reassurance"
function page() {
  return (
    <div>
      <div className=' bg-black  text-yellow-400 text-center py-2 visible lg:hidden '> 
        919-557-447
      </div>
      {/* <Headers/> */}
      

        {/* <EyeCatch/> */}
        <div className='bg-white text-black relative mt-10 flex flex-col text-center sm:flex-row  pb-3'>
        {/* split this please */}
          <div className='lg:w-1/4 md:2/3'>
          {/* Right hand side */}
            {/* <GenSideBarLinks/> */}
            Working here
            {/* <RequestAppointmentSide/> */}
          </div>
          <div className='lg:w-3/4'>
            {/* Left hand side */}
            <div className='p-6'>
              <p className='capitalize text-orange-600 text-4xl'> generator installation and Replacement</p>
              <p className='capitalize text-2xl'> Keeping The Power On When You Need It </p>
            </div>
          {/* [TODO:] PHOTO HERE */}
          <p className='p-6 text-left '>
            We know that you and your family depend on electricity to power your life.
             We also know that there are times your home and business deal with power 
             loss that can last days and even weeks. Don’t let unexpected power loss stop 
             your daily life and let PowerMaster install or replace your current generator
              with a brand-new reliable generator that fits your households needs. Our expert team 
              is versed on the latest and greatest generators to not only make sure we suggest the 
              best one for your family but stay in your budget also. Reach out to a member of our generator
               team today for a free, no obligation generator consultation today!</p>
            <MidCatchChatYellow/>
            <p className='mt-3 text-2xl text-left'>Expert Generator Installation</p>
            <p className='p-6 text-left'>
            Our expert team is ready to handle and wire your new generator directly
             into your service panel or transfer switch. Doing this will make 
             sure that the electricity is transferred safely into the home and 
             prevent generator overload. Not installing a generator properly can
              result in back firing, back feeding, carbon monoxide and other 
              hazards, so make sure you have your generator installed by a 
              certified professional every time.
            </p>
            <MidCatchChatRed/>
          </div>
          {/* LEFT HAND SIDE  */}
        </div>


        {/* bottom Eye Catch */}
        {/* <div className='mt-1'>
          Bottom Eye Catch
          <Reassurance/>
        </div> */}
    </div>
  )
}

export default page