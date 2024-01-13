import Footer from "../components/footer";
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import LatestNews from "../components/lastestNews";
import SponsorsHomePage from "../components/sponsorsHomePage";
import AlertMessage from "../components/alertMessage";
import "../App.css"


export default function Home (){
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar />
            <Hero />
            <br></br>
            <AlertMessage />
            <LatestNews />
            <br></br>
            <SponsorsHomePage />
            <Footer />
            <br></br>
        </div>
    )
}