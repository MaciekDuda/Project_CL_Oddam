import About from "./About";
import Contact from "./Contact";
import NavHeader from "./NavHeader";
import SimpleSteps from "./SimpleSteps";
import ThreeColumns from "./ThreeColumns";
import WhoWeHelp from "./WhoWeHelp";


const Home = () => {
    return (  
        <>
            <NavHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <About/>
            <WhoWeHelp/>
            <Contact/>
        </>
    );
}
 
export default Home;