import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [
        {
            id:"1",
            name: "Sarthak Chandurkar",
            username: "sarthak_s_c",
            password: "!wr98r892e4",
            proficPic: "images/femaleusericon.png"
        },
        {
            id:"2",
            name: "Dhanashri Chandurkar",
            username: "dhanu394",
            password: "hnyhrrr4",
            proficPic: null
        },
        {
            id:"3",
            name: "Khushali Chandurkar",
            username: "khushi0482",
            password: "43434effe",
            proficPic: null
        },
        {
            id:"4",
            name: "Sankalp Chandurkar",
            username: "sankalp912",
            password: "dgsdg4343434",
            proficPic: null
        },
        {
            id:"5",
            name: "Aishwarya Dhanvijay",
            username: "asish28472",
            password: "35fsfdff",
            proficPic: null
        }
    ]
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded:{
            reducer(state, action){
                state.push(action.payload)
            }
        }
    }
})

export const selectAllUsers = (state) => state.users.users
export const { userAdded } = usersSlice.actions
export default usersSlice.reducer