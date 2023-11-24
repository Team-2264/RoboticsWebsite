import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import LatestNews from "./components/lastestNews";
import Datebar from "./components/dateBar";
import "./App.css"
// 
// 
// 
// 

const App = () => {

    return  (
        <div className="max-w-8xl m-auto">
            <NavBar />
            <Hero />
            <br></br>
            <br></br>
            <LatestNews />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default App;