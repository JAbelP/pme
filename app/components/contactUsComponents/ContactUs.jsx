'use client';
import React ,{useState} from "react";


export const ContactUs = () =>{
    const options = [
        'General Installation',
        'Electrical Repair',
        'Generator Maintenance',
        'Commercial Electrical Service',
        'Electrical Panel Replacement/Installation',
        'Other',
      ];

        // WHAT THE USER HAS SELECTED ON THE SERVICE
  const [selectedOption, setSelectedOption] = useState('yes');
  // FULL NAME OF THE USER
  const [fullName, setFullName] = useState("Abel");
  // EMAIL OF THE USER
  const [email, setEmail] = useState('');
  // PHONE NUMBER OF THE USER
  const [ phone, setPhone ] = useState('');
  // GETS THE CURRENT PAGE (URL)
  const [ page, setPage ] = useState(0);
  const [ nameWarning, setNameWarning ] = useState(false);
  const [ emailWarning, setEmailWarning ] = useState(false);
  const [ phoneWarning, setPhoneWarning ] = useState(false);

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

  const increasePage = () => {
    setPage(1);
}
    return (
        <div className='flex flex-col justify-center items-center gap-y-1'>
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

        </div>
      );
}