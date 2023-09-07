import About from "../About/About";
import Banner from "../Banner/Banner";

//import FeaturedCampaign from "../FuturedCampian/FuturedCampian";
import SemiBanner from "../SemiBanner/SemiBanner";
import Strength from "../Strength/Strength";


const Home = () => {
    return (
        <div>
            
           <Banner></Banner>
           
           <About></About>

           <SemiBanner></SemiBanner>
           
           <Strength></Strength>

           {/* <FeaturedCampaign></FeaturedCampaign> */}
        </div>
    );
};

export default Home;