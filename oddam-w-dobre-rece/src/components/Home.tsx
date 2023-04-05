import About from "./About";
import NavHeader from "./NavHeader";
import SimpleSteps from "./SimpleSteps";
import ThreeColumns from "./ThreeColumns";


const Home = () => {
    return (  
        <>
            <NavHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <About/>
        </>
    );
}
 
export default Home;