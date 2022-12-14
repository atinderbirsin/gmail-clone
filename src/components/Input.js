import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateError, updateValue } from '../features/form/formSlice';
import { ErrorMessage } from './ErrorMessage';
import { InfoMessage } from './InfoMessage';
import { Placeholder } from './Placeholder';

export const Input = ({
  type,
  className,
  formName,
  fieldName,
  focus,
  validation,
  infoMessageText,
}) => {
  const form = useSelector((state) => state.form);
  const errorFormName = [formName]+'Error';
  const [touched, isTouched] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    focus && ref.current.focus();

    dispatch(updateError({ [errorFormName]: {[fieldName]: ''} }));

    if(!form[formName]?.[fieldName]){
      dispatch(updateValue({ [formName]: {[fieldName]: ''} }));
    }

    // return () => {
    //   dispatch(updateValue({ [formName]: {[fieldName]: form?.[formName]?.[fieldName]} }));
    // };
  }, []);

  const placeHolderClass = `absolute text-[#5f6368] top-[50%] translate-y-[-50%] ml-4  
        ${
          form?.[formName]?.[fieldName] || touched 
            ? 'top-0 text-[12px] z-50 bg-white px-1 text-blue-500 !ml-[6px]'
            : ''
        } ${
          form?.[errorFormName]?.[fieldName] && touched ? 'top-0 text-[12px] z-50 bg-white px-1 text-red-500 !ml-[6px]' : ''
  } ${!touched ? '!text-[#5f6368]' : ''} transition-all pointer-events-none`;

  const validate = (value) => {
    for (let i = 0; i < validation.length; i++) {
      const error = validation[i](value);
      
      if (!error) {
        dispatch(updateError({ [errorFormName]: {[fieldName]: ''} }));
      } else {
        dispatch(updateError({ [errorFormName]: {[fieldName]: error} }));
        break;
      }
    }
  };

  const onInputFocus = (e) => {
    isTouched(!touched);
    // validate(e.target.value); // Validation starts if input field is touched
  }

  const onInputValueChange = (e) => {
    dispatch(updateValue({ [formName]: {[fieldName]: e.target.value} }));
    validate(e.target.value);
  };

  return (
    <div className='w-full'>
      <div className="flex">
        <div className="relative mb-1 w-full">
          <input
            ref={ref}
            type={type}
            value={form?.[formName]?.[fieldName] || ''}
            onChange={onInputValueChange}
            onFocus={(e) => onInputFocus(e)}
            onBlur={() => isTouched(false)}
            className={`${className} ${ form?.[errorFormName]?.[fieldName] ? '!outline-red-500' : ''}`}
          />
          {fieldName && <Placeholder className={placeHolderClass} text={fieldName?.[0]?.toUpperCase()+fieldName?.slice(1)} />}
        </div>
      </div>
      <ErrorMessage text={form?.[errorFormName]?.[fieldName]} className={`text-red-500 text-xs mb-3`} />
      <InfoMessage
        text={infoMessageText}
        className={`${ form?.[errorFormName]?.[fieldName] ? 'hidden' : 'block'} text-[#5f6368] text-xs mb-3 w-full overflow-ellipsis`}
      />
    </div>
  );
};
