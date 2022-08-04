import { useState } from 'react';
import img from '../images/logo.jpg';
import { Input } from '../components/Input';
import { Placeholder } from '../components/Placeholder';
import { ErrorMessage } from '../components/ErrorMessage';
import { InfoMessage } from '../components/InfoMessage';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import account from '../images/account.jpg';

export const Signup = () => {
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
  const [inputConfirmPasswordClick, setInputConfirmPasswordClick] =
    useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-[#dadce0] rounded-lg grid grid-cols-[1.5fr,1fr] items-center justify-items-center max-w-3xl" >
        <div className="px-10 py-5 col">
          {' '}
          <img src={img} alt="Logo" className="w-28" />
          <h1 className="text-2xl mb-2 font-normal">
            Create your Google Account
          </h1>
          <p className="text-slate-800 mb-6">to continue to Gmail</p>
          <div className="flex gap-3">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputNameClick(true)}
                onBlur={() => setInputNameClick(false)}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputNameClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  isEmpty
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="First Name"
              />
            </div>

            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputSurnameClick(true)}
                onBlur={() => setInputSurnameClick(false)}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputSurnameClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                  isEmpty
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Last Name"
              />
            </div>
          </div>
          <ErrorMessage
            text="Enter first name and surname"
            className="text-red-500 text-sm flex gap-1 mb-6"
          />
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
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputEmailClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  isEmpty
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Username"
              />
              <Placeholder
                className={`absolute text-black top-[50%] right-2 translate-y-[-50%] ml-4`}
                text="@gmail.com"
              />
            </div>
          </div>
          <InfoMessage
            text="You can use letters,numbers & periods"
            className={`"text-sm text-gray-500 pointer-events-none"`}
          />
          <ErrorMessage
            text="Choose a Gmail address"
            className="text-red-500 text-sm flex gap-1 mb-6"
          />
          <div className="flex gap-3">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputPasswordClick(true)}
                onBlur={() => setInputPasswordClick(false)}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputPasswordClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  isEmpty
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Password"
              />
            </div>

            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
                onFocus={() => setInputConfirmPasswordClick(true)}
                onBlur={() => setInputConfirmPasswordClick(false)}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                inputConfirmPasswordClick
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                  isEmpty
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Confirm"
              />
            </div>
          </div>
          <InfoMessage
            text="You 8 or more characters with a mix of letters,numbers & symbols"
            className="text-sm text-gray-500 pointer-events-none"
          />
          <ErrorMessage
            text="Enter a password"
            className="text-red-500 text-sm flex gap-1 mb-6"
          />
          <div className="flex items-center gap-2 mb-8 text-sm">
            <span
              className={`p-2 rounded-full  flex ${
                isChecked ? 'bg-blue-200' : 'hover:bg-slate-200'
              } transition-all`}
            >
              <Input
                type="checkbox"
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-5 h-5 border-3 border-amber-500 focus:outline-none rounded-lg"
                onClick={() => setIsChecked(!isChecked)}
              />
            </span>
            Show password
          </div>
          <div className="flex justify-between items-start">
            <Link
              to="/"
              className="text-blue-500 font-semibold hover:bg-blue-100 p-2  rounded-[4px]"
            >
              Sign in instead
            </Link>
            <Button
              className="bg-blue-500 px-6 py-2 text-white rounded-[4px] mb-8"
              type="submit"
              // onClick={(e) => onFormSubmit(e)}
              text="Next"
            />
          </div>
        </div>

        <div>
          <img src={account} className="max-w-xs" alt="Acoount opening form" />
          <p className='text-md text-center px-10 text-slate-600'>One account. All of Google working for you.</p>
        </div>
      </div>
    </div>
  );
};
