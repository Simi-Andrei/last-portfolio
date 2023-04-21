import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-1 bg-stone-50">
        <div>
          <Home />
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
