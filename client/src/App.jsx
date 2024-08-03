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



function App() {

  return (
    <>

      <Header />

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/event/all' element={<EventList />} />
        <Route path='/event/create' element={<EventCreate />} />
        <Route path='/event/:eventId/details' element={<EventDetails />} />

      </Routes>


      <Footer />


    </>
  )
}

export default App
