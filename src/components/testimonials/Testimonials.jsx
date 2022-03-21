export const Testimonials = () => {
  return (
    <section className="w-full text-seafoam">
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

const SecondPage = () => (
  <section className="flex flex-col justify-center items-start ">
    <Bubble />
    <p className="">🧑🏻‍💻</p>
    <Bubble />
    <p className="">👩🏼‍💻</p>
    <Bubble />
    <p className="">👩🏽‍💻</p>
  </section>
);

const Bubble = (pointDirection, bg, txt) => {
  return (
    // TODO: Point is at the bottom half of the rounded corner.

    <div
      className={`my-2 py-4 px-4 bg-blue-500 text-white rounded-full w-max ${pointDirection}`}
    >
      Testimonial Message Here...
    </div>
  );
};

// TODO: iPhone chat bubble <- ->
