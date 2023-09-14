import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { user_google } from "../store/actions/userActions";

const GoogleButton = () => {

    const dispatch = useDispatch()

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {

        const data = {
            token_id: response.credential
        }

        try {
            dispatch(user_google({
                data: data
            }))
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "1096793854727-5odpve65g1hsuhq5i3nrs8p42sqsl1o3.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "filled_black", size: "medium", text: 'signin_with' }  // customization attributes
            );
        }
    }, [])

    return (
        <div ref={googleButton}>GOOGLE</div>
    )
}

export default GoogleButton