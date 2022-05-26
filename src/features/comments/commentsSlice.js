import { createSlice } from "@reduxjs/toolkit"
import { COMMENTS } from "../../app/shared/COMMENTS"

const initialState = {
    commentsArray: COMMENTS
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log("action payload: ", action.payload)
            console.log("state commentsArray: ", state.commentsArray)

            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            }
            state.commentsArray.push(newComment) // immer handles making this 'correct'
        }
    }
})

export const commentsReducer = commentsSlice.reducer

export const { addComment } = commentsSlice.actions

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    )
}
