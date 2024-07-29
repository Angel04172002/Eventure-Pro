import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import EventSection from './components/event-section/EventSection';
import EventCreate from './components/event-section/event-create/EventCreate';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import EventDetails from './components/event-section/event-details/EventDetails';

function App() {

  return (
    <>

      <Header />

      <Routes>

        <Route path='/event/all' element={<EventSection />} />
        <Route path='/event/create' element={ <EventCreate />} />
        <Route path='/event/:eventId/details' element={ <EventDetails />} />

      </Routes>




      <Footer />
    </>
  )
}

export default App
