import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {LoginPageInputs} from "../types/authentication.type"
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage:FC =() =>{
  const [t,i18n] = useTranslation();
 const { register, handleSubmit,watch, formState: { errors, isDirty, isValid } } = useForm<LoginPageInputs>({ mode: 'onChange' });
 const navigate = useNavigate();
 const onSubmit: SubmitHandler<LoginPageInputs> = data => {
  const {email,password}=data
  AuthService.login(email,password).then(
    () => {
      return navigate('/profile')
    },
    error => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }
  );
 }


 useEffect(() =>{
  const currentUser = AuthService.getCurrentUser();
  if(currentUser){
    //return navigate('/profile')
  }
  const subscription = watch();
   console.log(subscription)
   console.log(isValid)
   console.log(isDirty)
 },[watch()])
    return (
        <>
        <div className="col-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
           <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>{t('Email')}</label>
            <input type="text" className="form-control" placeholder="Enter Email" {...register("email", { required: `${t('Required')}`, pattern: {value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:  `${t('InvalidEmail')}`} })}   aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <p  className="alert alert-danger" role="alert">{errors.email.message}</p>}
   

          </div>
          <div className="form-group">
            <label>{t('Password')}</label>
            <input type="password" className="form-control" placeholder="Enter Password" {...register("password", { required:`${t('Required')}`,   minLength: {value:6,message: `${t('MinLengthMsg')}`}})}   aria-invalid={errors.password ? "true" : "false"}  />
            {errors.password && <p  className="alert alert-danger">{errors.password.message}</p>}
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary mb-3" disabled={!isValid}>{t('Login')}</button>
          </div>
        </form>
          </div>
          </div>
       
      </>
    )
}
export default LoginPage