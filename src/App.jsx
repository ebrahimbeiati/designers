import styles from "./style"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";



const App = () => {
  return (
    <>
      <div className={`bg-slate-200 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Navbar />
        </div>
      </div>
      <div className={`bg-slate-200 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-slate-200 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
          <Services />
          <Projects />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App