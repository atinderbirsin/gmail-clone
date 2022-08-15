import ErrorIcon from '@mui/icons-material/Error';

export const ErrorMessage = ({text, className}) => {

    return (
        <div className='flex items-center'>
            {text && (<p className={className}><ErrorIcon className='!text-[14px]'/> {text}</p>)}
        </div>
    )

}