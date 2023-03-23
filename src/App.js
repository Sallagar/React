import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeaderContainer from './components/header/HeaderContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Music from './components/music/Music';
import Settings from './components/set/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/news/News';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/news" element={<News />} />
            <Route
              path="/profile/:userId"
              element={
                <ProfileContainer />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer />
              }
            />
            <Route
              path="/users"
              element={
                <UsersContainer />
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
