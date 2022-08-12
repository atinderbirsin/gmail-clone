import { useState } from 'react';
import img from '../images/logo.jpg';
import { Placeholder } from '../components/Placeholder';
import account from '../images/account.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addFirstName, addLastName } from '../features/form/formSlice';
import { Input } from '../components/Input';
import { InfoMessage } from '../components/InfoMessage';
import { addErrors, removeErrors } from '../features/form/errorsSlice';

const SignupCopy = () => {
  const form = useSelector((state) => state.form);
  const errors = useSelector((state) => state.errors);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    validate(form);


    if(errors.firstName || errors.lastName){

    }else {
      
    }
  };

  const validate = (value) => {
    const errors = {};

    if (!value.firstName) {
      errors.firstName = 'Firstname is required';
    }

    if (!value.lastName) {
      errors.lastName = 'Lastname is required';
    }

    if(errors.firstName || errors.lastName){
      console.log(errors);
      dispatch(addErrors(errors));
    }else if(errors.firstName === void(0) || errors.lastName === void(0)){
      dispatch(removeErrors())
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-[#dadce0] rounded-lg grid grid-cols-[1.5fr,1fr] items-center justify-items-center max-w-3xl">
        <form className="px-10 py-5 col" onSubmit={(e) => onFormSubmit(e)}>
          <img src={img} alt="Logo" className="w-28" />
          <h1 className="text-2xl mb-2 font-normal">
            Create your Google Account
          </h1>
          <p className="text-slate-800 mb-6">to continue to Gmail</p>
          <div className="flex">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={(e) => dispatch(addFirstName(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                form.firstName
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  errors.firstName
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="First Name"
              />
            </div>
          </div>
          <InfoMessage
            text={errors.firstName}
            className={`${'bb'} text-red-500 text-sm mb-3`}
          />
          <div className="flex">
            <div className="relative mb-1 w-full">
              <Input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={(e) => dispatch(addLastName(e.target.value))}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
              />
              <Placeholder
                className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                form.lastName
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                  errors.lastName
                    ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                    : ''
                } transition-all pointer-events-none`}
                text="Last Name"
              />
            </div>
          </div>
          <InfoMessage
            text={errors.lastName}
            className={`${'bb'} text-red-500 text-sm mb-3`}
          />
          <button>Submit</button>
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

export default SignupCopy;
