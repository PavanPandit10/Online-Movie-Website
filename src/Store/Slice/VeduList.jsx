import { createSlice,combineReducers } from '@reduxjs/toolkit'
import ST from "../../Assets/ST.jpg"
import pushpa2 from "../../Assets/pushpa2.jpg"
import wednesdayImg from "../../Assets/wednesdayImg.jpeg"
import MH from "../../Assets/MH.jpg"
import avatarImg from '../../Assets/avatar.jpg'

const veduData= [

    {
    id:1,    
    title:"STRANGER THINGS",
    image:ST
    },

    {
    id:2,
    title:"WEDNESDAY",
    image:wednesdayImg
    },
    {
    id:3,
    title:"MONEY HEIST",
    image:MH
    },
    {
    id:4,
    title:"AVATAR",
    image:avatarImg
    },
    {
    id:5,
    title:"PUSHPA 2",
    image:pushpa2
    }, 
]

export const userSlice = createSlice({
    name:"list",
    initialState:veduData
   
}
)