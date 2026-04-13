import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/surveySlice"

const store= configureStore({
    reducer: {
        survey: surveyReducer
    }
})

export default store