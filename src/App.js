import React from 'react';
import Header from './components/Header';
import Index from './components/Index';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Services/>} />,
));

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
