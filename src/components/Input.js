import { forwardRef, useEffect } from "react"

export const Input = ({type, value, onChange, className, onClick}) => {
    return (
        <input type={type} value={value} onChange={onChange} className={className} onClick={onClick}/>
    )
};

