import About from "./About";
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
        </>
    );
}
 
export default Home;