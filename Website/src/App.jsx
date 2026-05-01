import { 
  BrowserRouter,
  Routes,
  Route,
  Router
 } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact"
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";

import { useState, useEffect } from "react";
import Top from "./pages/Top";
import Logo from "./components/Logo"
import Home from "./components/Home";

function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)
    return () => clearTimeout(timer)
  },[])

  if (loading) {
    return (
      <Logo />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
