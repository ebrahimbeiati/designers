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
import CardDeal from "./components/CardDeal";



const App = () => (
  <div className="w-full overflow-hidden bg-sky-950">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div
      className={`"contact-sec sec-pad bg-gradient-to-br from-blue-400 via-blue-700 to-blue-500 min-h-screen" ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-gray-900 `}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
        <Team />
        <CardDeal />
        <Testimonials />
        <Projects />
        <Services />
        <Contact />
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;