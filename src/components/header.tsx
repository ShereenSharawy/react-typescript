import React, { FC, ReactEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../types/authentication.type";
import AuthService from "../services/auth.service";
import { useTranslation } from "react-i18next";
/*
  {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                   user
                </Link>
              </li>
            )}
             */
const Header:FC =() =>{
    const [showAdminBoard,setShowAdminBoard] =useState("false");
    const [showModeratorBoard,setshowModeratorBoard] =useState("false");
    const [currentUser,setcurrentUser] =useState<User | null>(null);
    const[language,setLanguage] = useState(localStorage.getItem("Lang")||"en");
    const [t, i18n] = useTranslation();

    const logOut =() =>{
      AuthService.logout();
    }
    useEffect(()=>{
      const user =AuthService.getCurrentUser();

      if(user){
        setcurrentUser(user.user);
        //setshowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      }
    },[])
     const changeLang =(e:any) =>{
      setLanguage(e.target.value);
      i18n.changeLanguage(e.target.value) ;
      localStorage.setItem("Lang",e.target.value);
     }
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          logo
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
               {t('Home')}
              </Link>
            </li>

          
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.name}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                {t('Logout')}
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                {t('Login')}
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                {t('Register')}
                </Link>
              </li>
            </div>
          )}
          <select className="form-select" aria-label="Default select example" value={language} onChange={changeLang}>
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
        </nav>

        </header>
    )
}
export default Header;