import { useState } from 'react';
import img from '../images/logo.jpg';
import { Input } from '../components/Input';
import { Placeholder } from '../components/Placeholder';
import { ErrorMessage } from '../components/ErrorMessage';
import { InfoMessage } from '../components/InfoMessage';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import account from '../images/account.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addConfirmPassword,
  addEmail,
  addFirstName,
  addLastName,
  addPassword,
} from '../features/form/formSlice';
import { validate } from '../helper/validate';

export const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const form = useSelector((state) => state.form);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const isValid = validate(form, dispatch);

    if (isValid) {
      console.log('form is valid');
    } else {
      console.log('form is invalid');
    }
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
          <div className="flex gap-3">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={form.firstName}
                onChange={(e) => dispatch(addFirstName(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 ${
                  errors.name
                    ? 'focus:outline-red-500 outline-red-500'
                    : 'focus:outline-blue-500'
                }`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1
              ${
                form.firstName
                  ? 'top-0 text-[12px] z-50 bg-white px-1 !text-blue-500'
                  : ''
              }  ${
                  errors.name
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="First Name"
              />
            </div>

            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={form.lastName}
                onChange={(e) => dispatch(addLastName(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 ${
                  errors.name
                    ? 'focus:outline-red-500 outline-red-500'
                    : 'focus:outline-blue-500'
                }`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1  
              ${
                form.lastName
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                  errors.name
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Last Name"
              />
            </div>
          </div>
          <ErrorMessage
            text={errors.name}
            className={`text-red-500 text-sm flex gap-1`}
          />
          <div className="flex gap-3 w-full mt-6">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                value={form.email}
                onChange={(e) => dispatch(addEmail(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 ${
                  errors.email
                    ? 'focus:outline-red-500 outline-red-500'
                    : 'focus:outline-blue-500'
                }`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1  
              ${
                form.email
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  errors.email
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
            className={`${
              errors.email ? 'hidden' : 'block'
            } text-xs text-gray-500 pointer-events-none`}
          />
          <ErrorMessage
            text={errors.email}
            className="text-red-500 text-sm flex gap-1"
          />
          <div className="flex gap-3 mt-6">
            <div className="relative mb-1 w-full">
              <Input
                type={isChecked ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => dispatch(addPassword(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 ${
                  errors.password
                    ? 'focus:outline-red-500 outline-red-500'
                    : 'focus:outline-blue-500'
                }`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1
              ${
                form.password
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  errors.password
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Password"
              />
            </div>

            <div className="relative mb-1 w-full">
              <Input
                type={isChecked ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={(e) => dispatch(addConfirmPassword(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 ${
                  errors.password
                    ? 'focus:outline-red-500 outline-red-500'
                    : 'focus:outline-blue-500'
                }`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1  
              ${
                form.confirmPassword
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 left-0'
                  : ''
              } ${
                  errors.password
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Confirm"
              />
            </div>
          </div>
          <InfoMessage
            text="You 8 or more characters with a mix of letters,numbers & symbols"
            className={`${
              errors.password ? 'hidden' : 'block'
            } text-xs text-gray-500 pointer-events-none`}
          />
          <ErrorMessage
            text={errors.password}
            className="text-red-500 text-sm flex gap-1"
          />
          <div className="flex items-center gap-2 mb-8 text-sm mt-6">
            <span
              className={`p-2 rounded-full  flex ${
                isChecked ? 'bg-blue-200' : 'hover:bg-slate-200'
              } transition-all`}
            >
              <Input
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
