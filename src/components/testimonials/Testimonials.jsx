import React from "react";
import { Header } from "../header/Header";

export const Testimonials = () => {
  return (
    <section className="w-full">
      <FirstPage />
      <SecondPage />
    </section>
  );
};

const FirstPage = () => (
  <section id="testimonials-splash" className="flex flex-col h-screen">
    <TestimonialsSplashContent />
  </section>
);
const TestimonialsSplashContent = () => (
  <main
    id="testimonial-landing"
    className="flex flex-col h-screen justify-center items-center"
  >
    <h1 className="text-center w-full text-9xl">Testimonials</h1>
    <h2 className="font-bold text-3xl">Don't take my word for it!</h2>
    <h3 className="text-xl font-bold">Here's what my students have to say!</h3>
  </main>
);

const SecondPage = () => <section></section>;

const TextInputiPhone = () => (
  // Reverse column
  <section>
    <input type="text" />
    {/* placeholder up arrow */}
  </section>
);

// TODO: TAKE OUT ALL CHILDREN
