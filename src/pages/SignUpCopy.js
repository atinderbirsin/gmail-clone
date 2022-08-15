import img from '../images/logo.jpg';
import account from '../images/account.jpg';
import { Input } from '../components/Input';
import { isEmpty } from '../helper/validate';

const SignupCopy = () => {

  const onFormSubmit = (e) => {
    e.preventDefault();
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
            <Input
              type='text'
              formName='signupForm'
              fieldName='firstName'
              className={`outline outline-1 rounded-[4px] outline-[#dadce0] w-full p-1 focus:outline-blue-500`}
              validation={[isEmpty('First Name')]}
              infoMessageText=''
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
