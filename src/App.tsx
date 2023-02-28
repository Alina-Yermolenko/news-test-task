import './App.scss';

import { Home } from './components/Home/Home'
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/Header';
import * as enTranslation from './translations/en.json';
import * as ukTranslation from './translations/uk.json';

import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    uk: {
      translation: ukTranslation
    },
  },
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>}
          />
          <Route
            path="*"
            element={<div>Page not found</div>}
          />
        </Routes>
      </main>
      <footer>
        @Company Inc 2023
      </footer>
    </BrowserRouter>
  );
}

export default App;
