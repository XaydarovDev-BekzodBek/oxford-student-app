import { createSlice } from "@reduxjs/toolkit";

const InitialState = () => {
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user)
    } else {
        return null
    }
}

const UserSlice = createSlice({
    name: "user",
    initialState: InitialState(),
    reducers: {
        setUser: (state, { payload }) => {
            state = payload
            localStorage.setItem("user",JSON.stringify(state))    
            return state
        },
        clearUser: (state, _) => {
            state = null
            localStorage.removeItem("user")
            return state
        },
    }
})

export const { setUser, clearUser } = UserSlice.actions
export default UserSlice.reducer