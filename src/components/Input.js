import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../features/form/formSlice';
import { InfoMessage } from './InfoMessage';
import { Placeholder } from './Placeholder';

export const Input = ({ type, className, formName, fieldName, validation }) => {
    console.log(fieldName,formName);
  const form = useSelector((state) => state.form);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const placeHolderClass = `absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
        ${
          form?.[formName]?.[fieldName]
            ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500'
            : ''
        } ${
    error[fieldName] ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500' : ''
  } transition-all pointer-events-none`;

  const validate = (value) => {
    for (let i = 0; i < validation.length; i++){
      const error = validation[i](value);

      if(!error){
        setError('');
    }else {
          setError(error);
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(updateValue({fieldName: ''}))
  },[])

  const onInputValueChange = (e) => {
    dispatch(updateValue({fieldName: e.target.value}));
    validate(e.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="relative mb-1 w-full">
          <input
            type={type}
            value={form?.[formName]?.[fieldName]}
            onChange={onInputValueChange}
            className={className}
          />
          <Placeholder className={placeHolderClass} text="First Name" />
        </div>
      </div>
      <InfoMessage
        text={error}
        className={`text-red-500 text-sm mb-3`}
      />
    </>
  );
};
