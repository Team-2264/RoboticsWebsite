import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import LatestNews from "./components/lastestNews";
import SponsorsHomePage from "./components/sponsorsHomePage";
import Footer from "./components/footer";
import "./App.css"
// 
// 
// 
// 

const App = () => {

    return  (
        <div className="max-w-8xl m-auto px-4 sm:px-6 lg:px-8">
            <NavBar />
            <Hero />
            <LatestNews />
            <br></br>
            <SponsorsHomePage />
            <br></br>
            <Footer />
            <br></br>
   
        </div>
    );
}

export default App;