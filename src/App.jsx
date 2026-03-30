import "./App.css";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";

const fetchPricing = async () => (await fetch("/pricing-data.json")).json();
const pricingPromise = fetchPricing();
// console.log(pricingPromise);

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Stats />
            <Main pricingPromise={pricingPromise} />
        </>
    );
}

export default App;
