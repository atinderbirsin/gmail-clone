import { useState } from 'react';
import img from '../images/logo.jpg';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import account from '../images/account.jpg';
import { useSelector } from 'react-redux';
import { CheckisEqual, CheckisValidEmail, isEmpty, isEqualToLength } from '../helper/validate';
import { InfoMessage } from '../components/InfoMessage';

export const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const form = useSelector((state) => state.form);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-[#dadce0] rounded-lg grid grid-cols-[1.5fr,1fr] items-center justify-items-center max-w-3xl">
        <form className="px-10 py-5 col">
          {' '}
          <img src={img} alt="Logo" className="w-28" />
          <h1 className="text-2xl mb-2 font-normal">
            Create your Google Account
          </h1>
          <p className="text-slate-800 mb-6">to continue to Gmail</p>
          <div className="flex gap-2">
              <Input
                type='text'
                formName='signupForm'
                fieldName='firstName'
                className='outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500'
                validation={[isEmpty('Firstname')]}
                infoMessageText='' 
              />
              <Input 
                type='text'
                formName='signupForm'
                fieldName='lastName'
                className='outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500'
                validation={[isEmpty('Lastname')]}
                infoMessageText=''
              />
          </div>
          <div className="flex gap-3 w-full mt-6">
            <Input 
                type='email'
                className='outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500'
                formName='signupForm'
                fieldName='email'
                validation={[isEmpty('email'),CheckisValidEmail('email')]}
                infoMessageText='You can use letters, numbers & periods'
            />
          </div>
          <div className="flex gap-3 mt-6">
            <Input 
                type={isChecked ? 'text' : 'password'}
                className='outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500'
                formName='signupForm'
                fieldName='password'
                validation={[isEmpty('password'),isEqualToLength('password',8)]}
                // infoMessageText='Use 8 or more characters with a mix of letters, numbers & symbols'
            />
            <Input 
                type={isChecked ? 'text' : 'password'}
                className='outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500'
                formName='signupForm'
                fieldName='confirm'
                validation={[isEmpty('confirm'),isEqualToLength('confirm',8),CheckisEqual('password',form['signupForm']['password'])]}
                />
          </div>
                <InfoMessage
                  text={'Use 8 or more characters with a mix of letters, numbers & symbols'}
                  className={`text-[#5f6368] text-xs mb-3 w-full overflow-ellipsis`}
                />
         
          <div className="flex items-center gap-2 mb-8 text-sm mt-6">
            <span
              className={`p-2 rounded-full  flex ${
                isChecked ? 'bg-blue-200' : 'hover:bg-slate-200'
              } transition-all`}
            >
              <input
                type="checkbox"
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-5 h-5 border-3 border-amber-500 focus:outline-none rounded-lg"
                onChange={() => setIsChecked(!isChecked)}
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
              onClick={(e) => onFormSubmit(e)}
              text="Next"
            />
          </div>
        </form>

        <div>
          <img src={account} className="max-w-xs" alt="Acoount opening form" />
          <p className="text-md text-center px-10 text-slate-600">
            One account. All of Google working for you.
          </p>
        </div>
      </div>
    </div>
  );
};
