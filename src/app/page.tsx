import Aboutus from "./_components/Aboutus";
import Blog from "./_components/Blog";
import Client from "./_components/Client";
import Contactus from "./_components/Contactus";
import Fetures from "./_components/Fetures";
import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navbar from "./_components/Navbar";
import Newsletter from "./_components/Newsletter";
import Pricing from "./_components/Pricing";
import Process from "./_components/Process";
import Project from "./_components/Project";
import Services from "./_components/Services";
import Team from "./_components/Team";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Logo />
      <Services/>
      <Aboutus />
      <Process />
      <Fetures />
      <Project />
      <Newsletter />
      <Team />
      <Pricing />
      <Client />
      <Blog />
      {/* <Contactus /> */}
    </div>
  );
}
