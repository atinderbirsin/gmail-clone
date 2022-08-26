import img from '../images/logo.jpg';
import {Link} from 'react-router-dom'
import { CheckisValidEmail, isEmpty } from '../helper/validate';
import { Input } from '../components/Input';

export const Login = () => {

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
              focus={true}
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
              <Link 
                to='/signup/v2/password'
                className="hover:bg-blue-100 py-2 block px-2 rounded-[4px] text-blue-500 font-medium"
                >
                  Create account
              </Link>
            </div>
            <Link              
              to='/signup/v2/password'
              className="bg-blue-500 px-6 py-2 text-white rounded-[4px]"
              type="submit">
                Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
