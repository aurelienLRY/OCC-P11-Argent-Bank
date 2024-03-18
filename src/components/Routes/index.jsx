import { Route, Routes} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AccountPage from '../../pages/AccountPage';
import NotFoundPage from '../../pages/404';

import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const Routeur = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); //Charge isAuthenticated from the store

    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={isAuthenticated ? <AccountPage /> :<Navigate to= "/" /> } />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Routeur;