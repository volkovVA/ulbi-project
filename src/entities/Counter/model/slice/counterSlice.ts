import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState = { value: 0 } as CounterSchema;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer;
