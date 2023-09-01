// themeActions.js
import { updateSideMenuState } from '../slices/sidemenu.slice';

export const updateSideMenuStateAction = state => dispatch => {
    dispatch(updateSideMenuState(state));
};
