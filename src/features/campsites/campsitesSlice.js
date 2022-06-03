import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { CAMPSITES } from "../../app/shared/CAMPSITES"
import { baseUrl } from "../../app/shared/baseUrl"
import { mapImageURL } from "../../utils/mapImageURL"

export const fetchCampsites = createAsyncThunk("campsites/fetchCampsites", async () => {
    const response = await fetch(baseUrl + "campsites")
    if (!response.ok) {
        return Promise.reject("Unable to fetch, status: " + response.status)
    }
    const data = await response.json()
    return data
})

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ""
}

const campsiteSlice = createSlice({
    name: "campsites", // state.campsites.propertiesInInitialState
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false
            state.errMsg = ""
            state.campsitesArray = mapImageURL(action.payload)
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : "Fetch failed"
        }
    }
})

export const campsitesReducer = campsiteSlice.reducer

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray
}

export const selectCampsiteById = (id) => (state) => {
    // Inner function gets state from redux and campsite id can be passed in as parameter
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id))
}

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured)
}
