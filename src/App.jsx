import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HightLight from "./components/HightLight";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <HightLight />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
