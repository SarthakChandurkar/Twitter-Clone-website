import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweets:[
        {
            userId:"1",
            tweet:"I am a new employee Here",
            date:"13/10/2022",
            media:null
        },
        {
            userId:"2",
            tweet:"I am a new carpenter Here",
            date:"13/10/2022",
            media:null
        },
        {
            userId:"3",
            tweet:"I am a new Boss Here",
            date:"13/10/2022",
            media:null
        },
        {
            userId:"4",
            tweet:"I am a new hero Here",
            date:"18/10/2022",
            media:null
        }
    ]
}

const tweetsSlice = createSlice({
    name:"tweets",
    initialState,
    reducers:{
        tweetAdded:{
            reducer(state,action){
                state.push(action.payload)
            }
        }
    }
})

export const selectAllTweets = (state)=>state.tweets.tweets
export const {tweetAdded} = tweetsSlice.actions
export default tweetsSlice.reducer
