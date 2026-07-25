import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    showCard: false
}

const uiSlice = createSlice({
    name: 'cardShow',
    initialState: INITIAL_STATE,
    reducers: {
        toggleCard: (state) => {
            state.showCard = !state.showCard;
        }
    }
});

export const { toggleCard } = uiSlice.actions;

export default uiSlice.reducer;