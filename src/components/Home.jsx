import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navigations/NavBar';


const Home = () => (
  <div className="flex w-screen overflow-y-hidden">
    <div className="w-full bg-slate-100 md:w-5/5">
      <NavBar />
      <Outlet />
    </div>
  </div>
);

export default Home;
