import img from '../images/logo.jpg';
import { Button } from '../components/Button';
import {useNavigate} from 'react-router-dom'
import { CheckisValidEmail, isEmpty } from '../helper/validate';
import { useSelector } from 'react-redux';
import { Input } from '../components/Input';

export const Login = () => {
  const state = useSelector(state => state.form);
  const navigate = useNavigate();

  const onCreateClick = (e) => {
    e.preventDefault();
    // setCreateClicked(true);
    navigate('/signup/v2',{replace: true})
  };


  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form className="rounded-lg flex-col flex items-center justify-center border border-[#dadce0] p-12">
          <img className="w-28" src={img} alt="Brand Logo" />
          <h1 className="text-2xl font-normal pb-2">Sign in</h1>
          <p className="pb-6">to continue to gmail</p>
            <Input
              type="email"
              formName='loginForm'
              fieldName='email'
              infoMessageText=''
              validation={[isEmpty('email'),CheckisValidEmail('email')]}
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500`}
            />
          <p className="font-medium text-blue-500 self-start text-sm cursor-pointer mb-8">
            Forgot email?
          </p>
          <p className="text-[#5f6368] text-sm">
            Not your computer? Use Guest mode to sign in privately.
          </p>
          <p className="font-medium text-blue-500 self-start text-sm cursor-pointer mb-8">
            Learn more
          </p>
          <div className="mb-14 flex justify-between w-full">
            <div className='relative'>
              <button
                onClick={(e) => onCreateClick(e)}
                className={` hover:bg-blue-100 py-2  px-2 rounded-[4px] text-blue-500 font-medium `}
              >
                Create account
                {/* {createClick ? (
                  <div
                    ref={createRef}
                    className="border text-left border-[#dadce0] py-2 bg-white text-lg absolute rounded-[4px] text-black font-normal w-56 drop-shadow-2xl flex flex-col items-start gap-2"
                  >
                    <p className="w-full hover:bg-slate-100 px-3 py-1 justify-self-start">
                      For myself
                    </p>
                    <p className="w-full hover:bg-slate-100 px-3 py-1">
                      For my child
                    </p>
                    <p className="w-full hover:bg-slate-100 px-3 py-1">
                      To manage my business
                    </p>
                  </div>
                 ) : null}  */}
              </button>
            </div>
            <Button               
              className="bg-blue-500 px-6 py-2 text-white rounded-[4px]"
              type="submit"
              onClick={(e) => onFormSubmit(e)} 
              text='Next'/>
          </div>
        </form>
      </div>
    </div>
  );
};
