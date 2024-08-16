import { createReducer } from "@reduxjs/toolkit";
import { user_login, user_logout, user_photo, user_token, user_google} from "../actions/userActions";

const initialState = {
    /* name: 'Lucho',
    photo: "../../../public/guest.webp", */
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {

            return{
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_google.fulfilled, (state, action)=>{
            return {
                ...state,
                user:action.payload.user,
                token:action.payload.token
            }
        })
        .addCase(user_logout, (store) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            return{
                user: {},
                token: "",
                online: false
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user
            }
        })
)

export default userReducer;