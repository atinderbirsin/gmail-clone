import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';

const preloadedState = {
    form : {
        firstName: 'Atinder',
        lastName: '',
        // email: '',
        // password: '',
        // confirmPassword: '',
    }
};

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
  preloadedState,
});
