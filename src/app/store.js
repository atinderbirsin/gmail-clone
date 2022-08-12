import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import errorsReducer from '../features/form/errorsSlice';

const preloadedState = {
    form : {
        firstName: 'Atinder',
        lastName: '',
        // email: '',
        // password: '',
        // confirmPassword: '',
    },
    errors: {}
};

export const store = configureStore({
  reducer: {
    form: formReducer,
    errors: errorsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
  preloadedState,
});
