import ErrorIcon from '@mui/icons-material/Error';

export const ErrorMessage = ({text, className}) => {

    return (
        <>
            {text && (<p className={className}><ErrorIcon className='!text-[20px]'/> {text}</p>)}
        </>
    )

}