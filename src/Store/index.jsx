import { configureStore,combineReducers } from "@reduxjs/toolkit"

import {userSlice} from "./Slice/VeduList"

const rootReducer = combineReducers({
    list:userSlice.reducer,   
})
const store = configureStore({
    reducer:
        rootReducer
})

export default store;