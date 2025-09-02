import NavBar from '../components/NavBar/NavBar';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
