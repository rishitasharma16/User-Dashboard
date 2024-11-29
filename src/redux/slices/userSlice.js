import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getAllUser(state, action){
            console.log(action.payload)
            state = action.payload
        }
    }

})

export default userSlice.reducer
export const {getAllUser} = userSlice.actions