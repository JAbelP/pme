'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export const ContactUs = () => {
  const pathname = usePathname();

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
    <div className='flex flex-col justify-center items-center gap-y-1'>
      <select
        className="text-black px-3 py-2 w-60 lg:w-[300px] h-10 mb-3 rounded-sm"
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
        className={`text-black px-3 py-2 lg:w-[300px] h-12 mb-${nameWarning ? 1 : 3} rounded-sm`}
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
        className={`text-black px-3 py-2 lg:w-[300px] h-10 mb-${emailWarning ? 1 : 3} rounded-sm`}
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
        className={`text-black px-3 py-2 lg:w-[300px] h-10 mb-${phoneWarning ? 1 : 3} rounded-sm`}
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
        className="flex justify-center items-center w-64 bg-yellow-300 text-black px-5 py-4 h-[57px] lg:w-[300px]"
        onClick={handleSubmit}
      >
        Get In Touch Now!
      </button>
    </div>
  );
};
