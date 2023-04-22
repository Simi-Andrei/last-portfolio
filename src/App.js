import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-1 overflow-hidden">
        <div>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
