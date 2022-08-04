import { forwardRef, useEffect, useRef, useState } from 'react';
import img from '../images/logo.jpg';
import ErrorIcon from '@mui/icons-material/Error';
import { Input } from '../components/Input';
import { Placeholder } from '../components/Placeholder';

export const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [click, setClicked] = useState(false);

  const onInputChange = (e) => {
    setFirstName(e.target.value)

    console.log(firstName);
  }

  useEffect(() => {
    window.addEventListener('click',(e) => {
        // if(ref.current && !ref.current.conatins(e.target)){
        //     if(!ref.current.value){
        //         setClicked(false)
        //     }
        // }
    })
  },[])

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
                onChange={(e) => onInputChange(e)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500`}
                onClick={() => setClicked(true)}
                />
            {/* <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              First Name
            </p> */}
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
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
                onChange={(e) => onInputChange(e)}
                className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500`}
                onClick={() => setClicked(true)}
                />
            <Placeholder className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`} text='Last Name' />
          </div>
        </div>
        {/* <div className='flex gap-3 w-full'>
          <div className="relative mb-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500 ${
                isEmpty ? '!outline-red-500' : ''
              } `}
              onClick={() => setClicked(true)}
              ref={ref}
            />
            <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              First Name
            </p>
          </div>
          <div className="relative mb-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500 ${
                isEmpty ? '!outline-red-500' : ''
              } `}
              onClick={() => setClicked(true)}
              ref={ref}
            />
            <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              Last name
            </p>
          </div>
          </div>
          <p
            className={`text-red-500 text-sm mb-2 self-start ${
              isEmpty ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ErrorIcon className="!text-[18px]" /> Enter first name and surname
          </p>
          <div className='flex gap-3 w-full'>
          <div className="relative mb-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500 ${
                isEmpty ? '!outline-red-500' : ''
              } `}
              onClick={() => setClicked(true)}
              ref={ref}
            />
            <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              First Name
            </p>
          </div>
          <div className="relative mb-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500 ${
                isEmpty ? '!outline-red-500' : ''
              } `}
              onClick={() => setClicked(true)}
              ref={ref}
            />
            <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
              ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              Last name
            </p>
          </div>
          </div>
          <p
            className={`text-red-500 text-sm mb-2 self-start ${
              isEmpty ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ErrorIcon className="!text-[18px]" /> Enter first name and surname
          </p> */}
      </div>
    </div>
  );
};
