import { addErrors } from "../features/form/errorsSlice";

export const validate = (value, dispatch) => {
    const errors = {};

    if(!value.firstName && !value.lastName) {
        errors.name = 'Enter first name and surname';
    }else if(value.firstName && !value.lastName) {
        errors.name = 'Enter last name';
    }else if(!value.firstName && value.lastName) {
        errors.name = 'Enter first name';
    }else if(value.firstName && value.lastName){
        errors.name = '';
    }

    if(!value.email) {
        errors.email = 'Choose a Gmail address';
    }else if(value.email) {
        errors.email = '';
    }

    if(!value.password) {
        errors.password = 'Enter a password';
    }else if(value.password.length < 8) {
        errors.password = 'Use 8 characters or more for your password';
    }else if(value.password) {
        errors.password = '';
    }

    if(!errors.password) {
        if(!value.confirmPassword) {
            errors.password = 'Confirm your password';
        }else if(value.confirmPassword !== value.password) {
            errors.password = 'Those passwords didn"t match. Try again.';
        }else if(value.confirmPassword) {
            errors.password = '';
        }
    }


    dispatch(addErrors(errors));

    if(errors.name === '' && errors.email === '' && errors.password === ''){
        return true;
    }
}