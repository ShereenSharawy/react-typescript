import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import { Props } from "../types/general.type";


const PrivateRoute:FC<PropsWithChildren<Props>> = ({children}:Props) => {
    const [isuserAuthorized,setUserAuthorized] = useState("false")
    useEffect(() => {
        const authToken = localStorage.getItem("user");
        if (authToken) {
            setUserAuthorized("true")
        }
        else{
            setUserAuthorized("false")   
        }
    }, []);
    return (
      <>
      {!isuserAuthorized && <Navigate to="/login" />}
      {isuserAuthorized && <>{children}</>}
      </>
    )
}
export default PrivateRoute;