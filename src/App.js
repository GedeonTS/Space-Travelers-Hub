import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profiles';
import { fetchRocket } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  return (
    <section className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
