import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slices/theme.slice';
import sideMenuReducer from '../slices/sidemenu.slice';

const store = configureStore({
  reducer: {
    activeTheme: themeReducer,
    sideMenuState: sideMenuReducer,
  },
});

export default store;
