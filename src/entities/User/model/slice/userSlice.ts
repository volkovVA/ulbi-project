import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState = {} as UserSchema;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
