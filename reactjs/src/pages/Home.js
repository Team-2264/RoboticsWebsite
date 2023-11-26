import Footer from "../components/footer";
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import LatestNews from "../components/lastestNews";
import SponsorsHomePage from "../components/sponsorsHomePage";
import "../App.css"



export default function Home (){
    return (
        <>
            <NavBar />
            <Hero />
            <LatestNews />
            <br></br>
            <SponsorsHomePage />
            <Footer />
            <br></br>
        </>
    )
}