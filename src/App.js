/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/auth/login';
import { loginActions } from './redux/login/loginReducer';
import LogedUsers from './components/accessibility/LogedUsers';
import SignUp from './components/auth/register';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  const tokenKey = 'token';
  if (localStorage.getItem(tokenKey)) {
    dispatch(loginActions.login(JSON.parse(localStorage.getItem(tokenKey))));
  }

  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route element={<LogedUsers logged={isLoggedIn} />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;