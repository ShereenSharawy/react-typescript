import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterPageInputs } from "../types/authentication.type";
import AuthService from "../services/auth.service"
import { Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const RegisterPage:FC = () =>{

  const [t,i18n] = useTranslation();
  let navigate = useNavigate();
 const { register, handleSubmit, watch, formState: { errors, isDirty, isValid }} = useForm<RegisterPageInputs>({ mode: 'onChange' });

 const onSubmit: SubmitHandler<RegisterPageInputs> = data =>{
  const {name,email,password}=data
   AuthService.register(name,email,password).then(
      response => {
      console.log(response.data);
      return navigate('/login')
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
      }
    );
  }



    return (
        <>
        <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-group">
            <label>{t('Name')}</label>
            <input type="text" className="form-control" placeholder="Enter Name"  {...register("name", { required:`${t('Required')}`})} />
            {errors.name && <p  className="alert alert-danger">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label>{t('Email')}</label>
            <input type="text" className="form-control" placeholder="Enter Email" {...register("email", { required: `${t('Required')}`, pattern: {value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message: `${t('InvalidEmail')}`} })}   aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <p  className="alert alert-danger" role="alert">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label>{t('Password')}</label>
            <input type="password" className="form-control" placeholder="Enter Password" {...register("password", { required: `${t('Required')}`,  minLength: {value:6,message:`${t('MinLengthMsg')}`}})}   aria-invalid={errors.password ? "true" : "false"}  />
            {errors.password && <p  className="alert alert-danger">{errors.password.message}</p>}
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary mb-3" disabled={!isValid}>{t('Register')}</button>
          </div>
        </form>
          </div>
          </div>
       
      </>
    )
}
export default RegisterPage;