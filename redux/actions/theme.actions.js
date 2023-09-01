// themeActions.js
import { updateActiveTheme } from '../slices/theme.slice';

export const updateActiveThemeAction = newTheme => dispatch => {
    dispatch(updateActiveTheme(newTheme));
};
