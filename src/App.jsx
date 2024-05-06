import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import { lazy } from "react";
const RegisterPage = lazy(() => import("./pages/AuthPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/AuthPage/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import { AppWrapper } from './App.styled';
// import HomePage from './pages/HomePage/HomePage';
import ScreensPage from './components/ScreensPage/ScreensPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
    console.log(test);
    return (
        <AppWrapper>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                {/* <Route path="/home" element={<HomePage />}/> */}
                <Route element={<PublicRoute />}>
                    <Route path="/welcome" element={<WelcomePage />}/>
                    <Route path="auth/register" element={<RegisterPage />} />
                    <Route path="auth/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                <Route path="/home/:boardName" element={<ScreensPage />}/>
                <Route path="/first" element={<FirstPage />} />
                <Route path="/second" element={<SecondPage />}>
                    <Route path=":half" element={<HalfPage />} />
                </Route>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
        </AppWrapper>
    );
}
export default App;



