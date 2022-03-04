import React from "react";
import { ContactModal } from "./components/contact-modal/ContactModal";
import { Footer } from "./components/footer/Footer";
import { Intro } from "./components/intro-page/Intro";
import { Testimonials } from "./components/testimonials/Testimonials";
import { What } from "./components/what-page/What";
import { Who } from "./components/who-page/Who";

/**
 * Light Color Palette
 * teal #85CBCC
 * light_teal #A8DEE0
 * khaki #F9E2AE
 * pale_orange #FBC78D
 * light_green #A7D676
 *
 * Dark Color Palette
 *midnight #0B0742
 *navy #120C6E
 *blue-oyster #5E72EB
 *coral #FF9190
 *sunset #FDC094
 *
 */

function App() {
  return (
    <div className="dark:bg-midnight text-center text-light-green scroll-smooth">
      <Intro />
      <Who id="bio" />
      <What id="first"></What>
      <Testimonials />
      <Footer />
      <ContactModal />
    </div>
  );
}
export default App;
