import {  Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AccountPage from '../../pages/AccountPage';
import NotFoundPage from '../../pages/404';


const Routeur = () => {
    return (
  
            <Routes>
                <Route exact path="/" element={ <HomePage/> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/account" element={ <AccountPage/> } />
                <Route path="/*" element={ <NotFoundPage/> } />
            </Routes>
   
    );
};

export default Routeur;