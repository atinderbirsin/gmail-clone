export const isEmpty = (key) => {
    return (value) => {
        if(value.length == 0) {
            return `Please enter ${key}`;
        }
        return '';
    }
};

export const isEqualToLength = (key,length) => {
    return (value) => {
        if(value.length < length) {
            return `Use ${length} characters or more for your ${key}`;
        }
        return '';
    }
};

export const CheckisEqual = (key,value2) => {
    return (value) => {
        // console.log('ssss',value)
        if(value != value2) {
            return `Those ${key} didn"t match. Try again.`;
        }
        return '';
    }
};

export const CheckisValidEmail = () => {
    return (value) => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(!regex.test(value)) {
            return `Please enter a valid email address`;
        }
        return '';
    }
};
