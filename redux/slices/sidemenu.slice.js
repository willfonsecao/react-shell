import { createSlice } from '@reduxjs/toolkit';

const sideMenuSlice = createSlice({
    name: 'isSideMenuOpened',
    initialState: false,
    reducers: {
        updateSideMenuState: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateSideMenuState } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
