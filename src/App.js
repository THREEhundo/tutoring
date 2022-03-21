import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ContactModal } from "./components/contact-modal/ContactModal";
import { Footer } from "./components/footer/Footer";
import { Header, NavLinks } from "./components/header/Header";
import { Intro } from "./components/intro-page/Intro";
import { Testimonials } from "./components/testimonials/Testimonials";
import { What } from "./components/everything/Everything";
import { Who } from "./components/who-page/Who";

// TODO: Add Contact
function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Intro />} />
        <Route path="/about" element={<Who />} />
        <Route path="/everything" element={<What />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/*<Route path="/contact" element={<ContactModal />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
export default App;

const Wrapper = () => {
  const [openMenu, setMenu] = useState(false);
  const handleClick = () => setMenu(!openMenu);

  return (
    <div className="bg-pale-orange text-center text-sunset scroll-smooth min-h-screen">
      <NavLinks openMenu={openMenu} handleClick={handleClick} />
      <Header openMenu={openMenu} handleClick={handleClick} />
      <Outlet />
      <Footer />
    </div>
  );
};

const NoMatch = () => (
  <main style={{ padding: "1rem" }}>
    <p>There's nothing here!</p>
  </main>
);
