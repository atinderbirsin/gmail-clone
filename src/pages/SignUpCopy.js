import img from '../images/logo.jpg';
import account from '../images/account.jpg';
import { InfoMessage } from '../components/InfoMessage';
import { Input } from '../components/Input';
import { isEmtpy } from '../helper/validate';

const SignupCopy = () => {
  const onFormSubmit = (e) => {};

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
            <Input
              type="input"
              className=""
              formName={'First Name'}
              validations={[isEmtpy('First Name')]}
            />
          </div>
          <div className="flex">
            <div className="relative mb-1 w-full"></div>
          </div>
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
