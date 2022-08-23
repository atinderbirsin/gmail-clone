import img from '../images/logo.jpg';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import {  isEmpty } from '../helper/validate';
import { useSelector } from 'react-redux';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';

export const Password = () => {
  const state = useSelector((state) => state.form);
  const navigate = useNavigate();


  const onCreateClick = (e) => {
    e.preventDefault();
    navigate('/signup/v2', { replace: true });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form className="rounded-lg flex-col flex items-center justify-center border border-[#dadce0] p-12 w-[430px]">
          <img className="w-28" src={img} alt="Brand Logo" />
          <h1 className="text-2xl font-normal pb-2">Welcome</h1>
          <p className="pb-6">to continue to gmail</p>
          <Input
            type="password"
            formName="loginForm"
            fieldName="password"
            focus={true}
            infoMessageText=""
            validation={[isEmpty('password')]}
            className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-4 focus:outline-blue-500`}
          />
          <Checkbox 
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-5 h-5 border-3 border-amber-500 focus:outline-none rounded-lg"
            margin='mt-1 mb-1 self-start'  
          />
          <div className="mb-14 mt-8 flex justify-between w-full">
            <div className="relative">
              <button
                onClick={(e) => onCreateClick(e)}
                className={` hover:bg-blue-100 py-2  px-2 rounded-[4px] text-blue-500 font-medium `}
              >
                Forgot password?
              </button>
            </div>
            <Button
              className="bg-blue-500 px-6 py-2 text-white rounded-[4px]"
              type="submit"
              onClick={(e) => onFormSubmit(e)}
              text="Next"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
