import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.slice";

export default configureStore({
    
        reducer: {
            trainerName: trainerNameSlice
        }
    
})