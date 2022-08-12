export const Input = ({type, value, onChange, className, onFocus, onBlur, onClick, validate}) => {
    return (
        <input type={type} value={value} onChange={onChange} className={className} onFocus={onFocus} onBlur={onBlur} onClick={onClick} validate={validate}/>
    )
};

