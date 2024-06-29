import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeRoute from './routes/HomeRoute';
import EventsRoute from './routes/EventsRoute';
import GalleryRoute from './routes/GalleryRoute';
import ContactRoute from './routes/ContactRoute';
// import EventDetails from './routes/EventDetails'; // Import EventDetails component
import EventCardDetails from './components/Events-components/EventCardDetails';

function App() {
  return (
        <Routes>
          <Route path="/home" element={<HomeRoute />} />
          <Route path="/events" element={<EventsRoute />} />
          <Route path="/gallery" element={<GalleryRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/event/:id" element={<EventCardDetails />} /> {/* Dynamic route for EventDetails */}
          {/* Add more routes as needed */}
        </Routes>
  );
}

export default App;
