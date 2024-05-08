import Navbar from "../components/Header/Navbar";
import Carousel from "../components/Home/Carousel";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <About/>
    <Services/>
    <Contact/>
    </>
  )
}
