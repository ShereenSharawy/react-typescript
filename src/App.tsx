import React, { FC, Suspense, useEffect, useState } from 'react';
import ErrorBoundary from './components/errorboundry';
import { BrowserRouter } from 'react-router-dom';
import APPRoutes from './routes';
import Loading from './components/loading';
import Header from './components/header';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Helmet}  from "react-helmet";    
/*    <Helmet>  
        <html lang={lang} />  

      </Helmet> */
const App:FC = () => {
  const[lang,setLanguage] = useState(localStorage.getItem("Lang")||"en");
  const [t, i18n] = useTranslation();
  useEffect(()=>{
    const lang = localStorage.getItem("Lang");
    i18n.changeLanguage(`${lang}`) ;
    document.documentElement.lang =`${lang}`;
    if(lang ==="ar") {document.body.style.direction = "rtl";}
    else{document.body.style.direction = "ltr";}

  
  },[localStorage.getItem("Lang")])
  return (
    <>
  
  
    <ErrorBoundary>
        <BrowserRouter>
          <Header/>
          <pre>{process.env.REACT_APP_SECRET_NAME}</pre>
          <Suspense fallback={<Loading/>}>
            <div className='container'>
            <APPRoutes/>
            </div>
         </Suspense>
         <Footer/>
        </BrowserRouter>
    </ErrorBoundary>
    </>
   
  );
}

export default App;
