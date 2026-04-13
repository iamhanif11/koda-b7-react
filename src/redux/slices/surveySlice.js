import { createSlice } from "@reduxjs/toolkit";

const initialState = {listSurvey:[]}

const surveySlice = createSlice({
    name: 'survey',
    initialState,

    reducers: {
        addSurvey: (state, action) => {
            state.listSurvey.push(action.payload)
        },

        removeSurvey: (state, action) => {
            state.listSurvey.filter(
                (item) => item.id !== action.payload
            )
        }
    }
})

export const {addSurvey, removeSurvey} = surveySlice.actions
export default surveySlice.reducer;