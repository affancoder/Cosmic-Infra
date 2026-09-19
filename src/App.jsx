import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;