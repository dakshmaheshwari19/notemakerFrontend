import { configureStore } from "@reduxjs/toolkit";
import notesSlice from '../feature/Notes/notesReducer.js'
import userSlice from '../feature/User/userReducer.js'

export const store = configureStore({
    reducer:{ 
        notes : notesSlice,
        user : userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})