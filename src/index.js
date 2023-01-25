import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MainApp from "./MainApp";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Signup from './pages/Signup';
import LoggedInApp from './pages/LoggedInApp';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainApp />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="loggedinapp" element={<LoggedInApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

