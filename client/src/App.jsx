import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import EventCreate from './components/event-create/EventCreate';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EventDetails from './components/event-details/EventDetails';
import EventList from './components/event-list/EventList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import CategoryCreate from './components/category-create/CategoryCreate';
import Logout from './components/logout/Logout';
import EventMine from './components/event-mine/EventMine';

import { AuthContextProvider } from './contexts/AuthContext';
import PrivateGuard from './components/common/PrivateGuard';
import EventEdit from './components/event-edit/EventEdit';



function App() {

  return (

    <AuthContextProvider>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/event/all' element={<EventList />} />
        <Route path='/event/:eventId/details' element={<EventDetails />} />


        <Route element={<PrivateGuard />}>

          <Route path='/event/mine' element={<EventMine />} />
          <Route path='/event/create' element={<EventCreate />} />
          <Route path='/event/:eventId/edit' element={<EventEdit />} />
          <Route path='/category/create' element={<CategoryCreate />} />
          <Route path='/logout' element={<Logout />} />

        </Route>

      </Routes>


      <Footer />


    </AuthContextProvider>
  )
}

export default App
