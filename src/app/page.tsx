
import MainContact from "./Contact/MainContact";
import MainFeatures from "./feature_section/MainFeatures";
import Footer from "./Footer/Footer";
import MainHero from "./Hero_Section/MainHero";
import Navbar from "./Navbar/Navbar";
import NavbarContent from "./Navbar/NavbarContent";
import Testing from "./project_service/Testing";
import Main from "./Project_work/Main";
import Department from "./Service_project/Department";
// import Service from "./Service_render/Service";

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
      {/* <Testing /> */}
      
    </div>
  );
}
export default Home;
