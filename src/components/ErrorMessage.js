import ErrorIcon from '@mui/icons-material/Error';

export const ErrorMessage = ({text, className}) => {
    return (
        <p className={className}><ErrorIcon className='!text-[20px]'/> {text}</p>
    )
}