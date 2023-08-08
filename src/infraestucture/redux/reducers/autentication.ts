import { PayloadAction, createSlice } from '@reduxjs/toolkit'
export interface AuthenticationState {
    userName: string
}
const initialState: AuthenticationState = {
    userName: ''
  }
export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        clearUserName: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.userName = ''
        },
        setByValue: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { clearUserName, setByValue } = authenticationSlice.actions

export default authenticationSlice.reducer