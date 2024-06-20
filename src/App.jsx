import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CardDeal from "./components/CardDeal";
import AboutUs from "./components/AboutUs";

const App = () => (
  <div>
    <div className="w-full overflow-hidden bg-gray-950">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div>
      <div
        className={`"contact-sec sec-pad  min-h-screen" ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div>
        <div className="w-full">
          <AboutUs />
          <CardDeal />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
