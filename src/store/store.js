import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import citieReducer from "./reducer/citieReducer";
import itineraryReducer from "./reducer/itinerarieReducer";


export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        citieReducer: citieReducer,
        itineraryReducer: itineraryReducer,
    }
})