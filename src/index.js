import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Header from '../src/components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import global_en from "./translations/en/global.json";
import global_swe from "./translations/swe/global.json";

i18next
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    fallbackLng: "en",
    ns: ["global"],
    defaultNS: "global",
    resources: {
      en: {
        global: global_en
      },
      swe: {
        global: global_swe
      }
    }
  })

export default function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Header />
        <RoutePaths />
        <Footer />
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();