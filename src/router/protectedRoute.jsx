import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const protectedRoute = ({children, path}) => {
    let user = useSelector(store => store.userReducer.user)

    if(user) return <Navigate to={path}/>

    return children;
}

export default protectedRoute