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
import { AuthContext } from './contexts/AuthContext';
import CategoryCreate from './components/category-create/CategoryCreate';



function App() {

  const [authData, setAuthData] = useState({});

  const updateAuthData = (obj) => {
    setAuthData(obj);
  };

  const dataObj = {
    email: authData.email, 
    isAuthenticated: !!authData.email,
    accessToken: authData.accessToken,
    updateAuthData
  };


  return (

    <AuthContext.Provider value={dataObj}>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/event/all' element={<EventList />} />
        <Route path='/event/create' element={<EventCreate />} />
        <Route path='/event/:eventId/details' element={<EventDetails />} />

        <Route path='/category/create' element={<CategoryCreate />} />

      </Routes>


      <Footer />


    </AuthContext.Provider>
  )
}

export default App
