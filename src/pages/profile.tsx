import React, { FC, useEffect, useState } from "react";
import { User } from "../types/authentication.type";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/*
<header className="jumbotron">
              <h3>
                <strong>{currentUser?.username}</strong> Profile
              </h3>
            </header>
        
  <p>
              <strong>Token:</strong>{" "}
              {currentUser?.accessToken.substring(0, 20)} ...{" "}
              {currentUser?.accessToken.substr(currentUser?.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser?.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser?.email}
            </p>
              
            <strong>Authorities:</strong>
            <ul>
              {currentUser?.roles &&
                currentUser?.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
*/
const ProfilePage:FC = () =>{
    const [userReady,setUserReady] =useState(false);
    const [currentUser,setcurrentUser] =useState<User | null>(null);
    let navigate = useNavigate();
    const [t,i18n] = useTranslation();

    useEffect(()=>{
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser)    return navigate('/home')
      setcurrentUser(currentUser);
    },[])


   return(
   
     <div className="container">
       profile
       <h1>{t('profile')}</h1>
      </div>
 
   )
}
export default ProfilePage;