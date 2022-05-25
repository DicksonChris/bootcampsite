import { createSlice } from "@reduxjs/toolkit"
import { CAMPSITES } from "../../app/shared/CAMPSITES"

const initialState = {
    campsitesArray: CAMPSITES
}

const campsiteSlice = createSlice({
    name: "campsites", // state.campsites.propertiesInInitialState
    initialState
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
