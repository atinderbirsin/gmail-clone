import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../features/form/formSlice';
import { ErrorMessage } from './ErrorMessage';
import { Placeholder } from './Placeholder';

export const Input = ({ type, className, formName, validations }) => {
  const form = useSelector((state) => state.form);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateForm({ [formName]: '' }));
  }, []);

  const [error, setError] = useState('');

  const validate = (value) => {
    for (let i = 0; i < validations.length; i++) {
      const error = validations[i](value);
      if (error) {
        setError(error);
        break;
      }
    }
  };

  const onChange = (e) => {
    dispatch(updateForm({ [formName]: e.target.value }));
    validate(e.target.value);
  };

  const placeHolderClass = `absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-1
  ${
    form?.form?.[formName]
      ? 'top-0 text-[12px] z-50 bg-white px-1 !text-blue-500'
      : ''
  }  ${
    errors.name ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500' : ''
  } transition-all pointer-events-none`;

  return (
    <>
      <div className="relative mb-1 w-full">
        <input
          type={type}
          value={form?.form?.[formName]}
          onChange={onChange}
          className={className}
        />
        <Placeholder className={placeHolderClass} text={formName} />
      </div>
      {error && (
        <ErrorMessage
          text={error}
          className={`text-red-500 text-sm flex gap-1`}
        />
      )}
    </>
  );
};
