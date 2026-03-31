import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import GetStarted from "./components/GetStarted/GetStarted";
import PricingCard from "./components/PricingCard/PricingCard";
import Transform from "./components/Transform/Transform";
import Footer from "./components/Footer/Footer";

const fetchPricing = async () => (await fetch("/pricing-data.json")).json();
const pricingPromise = fetchPricing();
// console.log(pricingPromise);

const fetchThreePricing = async () =>
    (await fetch("/pricing-three.json")).json();
const threePricingPromise = fetchThreePricing();
// console.log(threePricingPromise)

function App() {
    const [carts, setCarts] = useState([]);
    return (
        <>
            <Navbar carts={carts} />
            <Banner />
            <Stats />
            <Main
                pricingPromise={pricingPromise}
                carts={carts}
                setCarts={setCarts}
            />
            <GetStarted />
            <PricingCard threePricingPromise={threePricingPromise} />
            <Transform />
            <Footer />
        </>
    );
}

export default App;
