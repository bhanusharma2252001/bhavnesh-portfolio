import { lazy, Suspense } from "react";

const Projects = lazy(() => import("./components/Projects"));
const SystemDesign = lazy(() => import("./components/SystemDesign"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


export default function App() {
  return (
<div className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Suspense fallback={null}>
        <Projects />
        <Resume />
        <Contact />
      </Suspense>
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Bhavnesh Sharma
      </footer>
    </div>
  );
}
