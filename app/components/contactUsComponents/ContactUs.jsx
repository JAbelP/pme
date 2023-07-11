'use client';
import React, { useState, useEffect,useRef } from "react";
import { usePathname } from 'next/navigation';

export const ContactUs = ({ highlightInput }) => {
  const pathname = usePathname();
  const inputRef = useRef(null);

  useEffect(() => {
    if (highlightInput) {
      inputRef.current.select();
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [highlightInput]);



  const options = [
    'General Installation',
    'Electrical Repair',
    'Generator Maintenance',
    'Commercial Electrical Service',
    'Electrical Panel Replacement/Installation',
    'Other',
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);

  useEffect(() => {
    if (pathname === 'generators/installation') {
      setSelectedOption(options[0]);
    }
    if (pathname === 'generators/maintenance') {
      setSelectedOption(options[2]);
    }
  }, [pathname]);

  const handleDropDownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setNameWarning(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailWarning(false);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneWarning(false);
  };

  const handleSubmit = () => {
    if (fullName === '') {
      setNameWarning(true);
    }
    if (email === '') {
      setEmailWarning(true);
    }
    if (phone === '') {
      setPhoneWarning(true);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-y-1 text-black'>

      <div className='flex flex-col justify-center items-center gap-y-1'>
        <select
          className="text-black px-3 py-2 w-96  lg:w-[450px] h-10 mb-3 rounded-sm"
          value={selectedOption}
          onChange={handleDropDownChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          ref={inputRef}
          className={`text-black px-3 py-2 w-96 lg:w-[450px] h-12 mb-${nameWarning ? '1' : '3'} rounded-sm`}
          type="text"
          placeholder="Full Name"
          onChange={handleFullNameChange}
          value={fullName}
          onClick={() => setNameWarning(false)}
        />
        {nameWarning && (
          <p className="text-red-500 text-xs">Please fill in the Full Name field.</p>
        )}
        <input
          className={`text-black px-3 py-2 w-96 lg:w-[450px] h-10 mb-${emailWarning ? 1 : 3} rounded-sm`}
          type="text"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          onClick={() => setEmailWarning(false)}
        />
        {emailWarning && (
          <p className="text-red-500 text-xs">Please fill in the Email field.</p>
        )}
        <input
          className={`text-black px-3 py-2 w-96 lg:w-[450px] h-10 mb-${phoneWarning ? 1 : 3} rounded-sm`}
          type="text"
          placeholder="Phone Number"
          onChange={handlePhoneChange}
          value={phone}
          onClick={() => setPhoneWarning(false)}
        />
        {phoneWarning && (
          <p className="text-red-500 text-xs">Please fill in the Phone Number field.</p>
        )}
        <button
          className="flex justify-center items-center w-96 bg-yellow-300 text-black px-5 py-4 h-[57px] lg:w-[450px] font-bold rounded-md"
          onClick={handleSubmit}
        >
          SUBMIT INFORMATION NOW
        </button>
          <a href="tel:919-557-4477">
            <div className="w-56 h-9 text-yellow-200 text-3xl font-semibold leading-9">(919) 557-4477</div>
          </a>
      </div>
    </div>
  );
};
