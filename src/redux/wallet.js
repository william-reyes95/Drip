import { createSlice } from '@reduxjs/toolkit'

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: false,
    sdk: false,
  },
  reducers: {
    setAddress: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.address = action.payload
    },
    setSDK: (state, action) => {
        state.sdk = action.payload
      }
  },
  
})

// Action creators are generated for each case reducer function
export const { setAddress, setSDK } = addressSlice.actions
export default addressSlice.reducer
