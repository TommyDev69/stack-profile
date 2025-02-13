
import MainContact from "./Contact/MainContact";
import MainFeatures from "./feature_section/MainFeatures";
import Footer from "./Footer/Footer";
import MainHero from "./Hero_Section/MainHero";
import Navbar from "./Navbar/Navbar";
import Main from "./Project_work/Main";
import Department from "./Service_project/Department";
import Service from "./Service_render/Service";


// import NavbarToggle from "./Navbar/NavbarToggle";

function Home() {
  return (
    <div className="containerw-fluid bg-blueBlack">
      <Navbar />
     
      <MainHero />
      <MainFeatures />
      <Main />
      <Department />
      <MainContact />
      <Footer />
      {/* <Service /> */}
    </div>
  );
}
export default Home;
