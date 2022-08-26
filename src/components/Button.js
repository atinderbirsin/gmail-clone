import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Button = ({ className, type, onClick, text, formName }) => {
  const form = useSelector((state) => state.form);
  let valid;
  const isFormValid = () => {
    console.log(form[formName]);
    for (const property in form[formName]) {
      if (form[formName][property] !== '') {
        return false;
      } 
      
      if(form[formName][property] == ''){
        return true;
      }
    }
  };

  useEffect(() => {
    valid = isFormValid();
  },[valid]);

  const buttonClick = (e) => {
    // console.log(form[formName])

    valid = isFormValid();

    console.log(valid);
    e.preventDefault();
  };

  return (
    <button
      className={`${className}  ${
        valid ? 'opacity-100 !cursor-pointer' : 'opacity-50 !cursor-not-allowed'
      }`}
      type={type}
      onClick={buttonClick}
      disabled={false}
    >
      {text}
    </button>
  );
};
