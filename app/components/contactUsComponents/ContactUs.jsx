"use client"
import React, { useState,useEffect } from 'react';
//[TODO: FONTS NEED TO BE FOND]
//[TODO: MAKE PHONE NUMBER CLICKABLE]
//[TODO: MAKE SURE INPUTS ARE NOT EMPTY]
//[TODO: w-[350px] might be for the full size website]
export const ContactUs = (props) => {
  //props
  //pathname - this is the url of the current page 
  const options = [
    'General Installation',
    'Electrical Repair',
    'Generator Maintenance',
    'Commercial Electrical Service',
    'Electrical Panel Replacement/Installation',
    'Other',
  ];

  // WHAT THE USER HAS SELECTED ON THE SERVICE
  const [selectedOption, setSelectedOption] = useState('General Installation');
  // FULL NAME OF THE USER
  const [fullName, setFullName] = useState("");
  // EMAIL OF THE USER
  const [email, setEmail] = useState('');
  // PHONE NUMBER OF THE USER
  const [ phone, setPhone ] = useState('');
  // GETS THE CURRENT PAGE (URL)
  const [ page, setPage ] = useState(0);
// [ THIS MUST BE TRUE TO ALLOW THE EMAIL TO BE SENT ] [TODO: HCAPTCHA]
  const [sendTrue, setSendTrue] = useState(false);
  const [ nameWarning, setNameWarning ] = useState(false);
  const [ emailWarning, setEmailWarning ] = useState(false);
  const [ phoneWarning, setPhoneWarning ] = useState(false);
  // Handles the change of the dropdown
  const handleDropDownChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  // Handles the change of the Name
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setNameWarning(false);
  };

  // Handle the change of the Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailWarning(false);
  };

  //handles the change of the Phone Number
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneWarning(false);
  };



  useEffect(() => {


    // This useEffect checks when the page changes if it has 
    //new page
    //if on last and sendTrue is true, it will send the email
    if (page === 2 && !sendTrue){
      setSendTrue(true);
      sendEmail();
    }

  }, [page, fullName]);

  // changes what slide is being displayed
  // Services interested/ full name -> email/phone -> Thank you Page
  const increasePage = () => {
    //check the page the user is on
    if (page === 0){
      // if they are on the first page, check if fullName is null or if it is empty warn the user
      if (fullName === null || fullName === "")
        {
          setNameWarning(true);
        }

      else

        {
          setPage(1);
        }
    } // page === 0
    if(page === 1){
      if( phone === null || phone === ""){
        setPhoneWarning(true);
      }
      if( email === null || email === ""){
        setEmailWarning(true);
      }
      if(email !== null && email !== "" && phone !==null && phone!== ""){
        setPage(2);
      }
    }



  }

    

    // sets the selector to the correct option based on the url
    useEffect(() => {
      if (props.pathname === "/generators/installation") {
        setSelectedOption(options[0])
      }
    },
      []
      );

/**
 * sends the Email
 * @async
 */
const sendEmail = async () => {
  try {
    const response = await fetch('/api/jobEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phone: phone,
        selectedOption: selectedOption
      })
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


    return (
        <div className='flex flex-col justify-center items-center gap-y-1'>
          {page === 0 ? (
            <>
              <select
                id="servicesDropdown"
                className='pl-5 h-10 mb-3 w-[15rem] md:w-[24rem] text-black rounded-sm'
                value={selectedOption}
                onChange={handleDropDownChange}
              >
                <option value="">Services You're Interested In</option>
                {options.map((option) => (
                  <option key={option} value={option} className='text-black'>
                    {option}
                  </option>
                ))}
              </select>
              <input
                className='pl-5 h-10 w-[15rem] md:w-[24rem] text-black rounded-sm placeholder:text-gray-500'
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Full Name"
              />
              <div>
                {nameWarning ? (
                  <p className="text-red-500 mb-1 capitalize text-left">
                    *Please Enter your name
                  </p>
                ) : (<>&nbsp;</>
                )}
              </div>
              <button className='bg-yellow-400 text-white h-10 w-[15rem] md:w-[24rem]' onClick={increasePage}>
                NEXT STEP
              </button>
            </>

          ) : (page === 1 ? (
            <>
            <input
                className='pl-5 h-10 w-[15rem] text-black rounded-sm md:w-[24rem]'
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
              />
              <div>
                {emailWarning ? ( 
                  <p className="text-red-500 mb-1 capitalize text-left">
                    *Please Enter your Email
                  </p>
                ) : (<></>
                )}
              </div>
            <input
                className='pl-5 h-10 text-black w-[35rem] rounded-sm md:w-[24rem]'
                type="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Phone/Mobile"
              />
               <div>
                {phoneWarning ? (
                  <p className="text-red-500 mb-1 capitalize text-left">
                    *Please Enter your Phone Number
                  </p>
                ) : (<>&nbsp;</>
                )}
              </div>
            <button className='bg-yellow-200 text-black h-10 w-[35rem] md:w-[24rem] mb-3 ' onClick={increasePage}>
                Schedule NOW
              </button>
            </>
          ) : (page === 2? (<>
            <div className='bg-slate-200 p-2 text-xl w-[350px] whitespace-pre-wrap mb-4'>
                Thank you for your message. We will get in touch with you shortly 
            </div>
          </>):null)
          )}
          {/* [TODO: FIND FONT MAKE LINK CLICKABLE ] */}
          <p className='text-yellow-200 text-3xl mt-2'>
            (919) 557-4477
          </p>
        </div>
      );
      
          }
;
