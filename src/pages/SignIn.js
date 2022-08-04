import { useState } from 'react';
import img from '../images/logo.jpg';
import { Input } from '../components/Input';
import { Placeholder } from '../components/Placeholder';
import { ErrorMessage } from '../components/ErrorMessage';
import { InfoMessage } from '../components/InfoMessage';

export const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputNameClick, setInputNameClick] = useState(false);
  const [inputSurnameClick, setInputSurnameClick] = useState(false);
  const [inputEmailClick, setInputEmailClick] = useState(false);
  const [inputPasswordClick, setInputPasswordClick] = useState(false);
  const [inputConfirmPasswordClick, setInputConfirmPasswordClick] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-80 h-80 border border-[#dadce0] rounded-lg ">
        <img src={img} alt="Logo" className="w-28" />
        <h1 className="text-2xl mb-2 font-normal">
          Create your Google Account
        </h1>
        <p className="text-slate-800 mb-6">to continue to Gmail</p>
        <div className="flex gap-3">
          <div className="relative mb-1">
            <Input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputNameClick(true)}
                onBlur={() => setInputNameClick(false)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputNameClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='First Name' />
          </div>

          <div className="relative mb-1">
            <Input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputSurnameClick(true)}
                onBlur={() => setInputSurnameClick(false)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputSurnameClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='Last Name' />
          </div>
        </div>
        <ErrorMessage text="Enter first name and surname" className='text-red-500 text-sm flex gap-1 mb-6' />
        <div className="flex gap-3 w-full">
          <div className="relative mb-1 w-full">
            <Input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputEmailClick(true)}
                onBlur={() => setInputEmailClick(false)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputEmailClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='Username' />
              <Placeholder  className={`absolute text-black top-[50%] right-2 translate-y-[-50%] ml-4`} text='@gmail.com'/>
          </div>
        </div>
          <InfoMessage text='You can use letters,numbers & periods' className='text-sm text-gray-500 pointer-events-none'/>
          <ErrorMessage text="Choose a Gmail address" className='text-red-500 text-sm flex gap-1 mb-6' />

          <div className="flex gap-3">
          <div className="relative mb-1">
            <Input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputPasswordClick(true)}
                onBlur={() => setInputPasswordClick(false)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputPasswordClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='Password' />
          </div>

          <div className="relative mb-1">
            <Input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputConfirmPasswordClick(true)}
                onBlur={() => setInputConfirmPasswordClick(false)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputConfirmPasswordClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='Confirm' />
          </div>
        </div>
        <InfoMessage text='You 8 or more characters with a mix of letters,numbers & symbols' className='text-sm text-gray-500 pointer-events-none'/>
        <ErrorMessage text="Enter a password" className='text-red-500 text-sm flex gap-1 mb-6' />

        <div>
        <Input type='checkbox' className='absolute opacity-0 w-0 h-0 cursor-pointer'/>
        <span className='absolute w-5 h-5 border-2 border-gray-500 rounded-sm cursor-pointer hover:bg-gray-100'></span>
        </div>
      </div>
    </div>
  );
};
