import { useEffect, useRef, useState } from 'react';
import img from '../images/logo.jpg';
import ErrorIcon from '@mui/icons-material/Error';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [click, setClicked] = useState(false);
  const ref = useRef();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!ref.current.value) {
          setClicked(false);
        }
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setIsEmpty(true);
      ref.current.focus();
    }

    if(email){
        setIsEmpty(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form className="rounded-lg flex-col flex items-center justify-center border border-[#dadce0] p-12">
          <img className="w-28" src={img} alt="Brand Logo" />
          <h1 className="text-2xl font-normal pb-2">Sign in</h1>
          <p className="pb-6">to continue to gmail</p>
          <div className="relative mb-1 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500 ${
                isEmpty ? '!outline-red-500' : ''
              }`}
              onClick={() => setClicked(true)}
              ref={ref}
            />
            <p
              className={`absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  ${
                click
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
                  : ''
              } ${
                isEmpty
                  ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500'
                  : ''
              } transition-all pointer-events-none`}
            >
              Email or phone
            </p>
          </div>
          <p
            className={`text-red-500 text-sm mb-2 self-start ${
              isEmpty ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ErrorIcon className="!text-[18px]" /> Enter an email or phone
            number
          </p>
          <p className="font-medium text-blue-500 self-start text-sm cursor-pointer mb-8">
            Forgot email?
          </p>
          <p className="text-[#5f6368] text-sm">
            Not your computer? Use Guest mode to sign in privately.
          </p>
          <p className="font-medium text-blue-500 self-start text-sm cursor-pointer mb-8">
            Learn more
          </p>
          <div className="self-end mb-14">
            <button
              className="bg-blue-500 px-6 py-2 text-white rounded-[4px]"
              type="submit"
              onClick={(e) => onFormSubmit(e)}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
