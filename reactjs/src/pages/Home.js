import Footer from "../components/footer";
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import LatestNews from "../components/lastestNews";
import SponsorsHomePage from "../components/sponsorsHomePage";
import AlertMessage from "../components/alertMessage";
import Awards from "../components/awards";
import UpcomingEvents from "../components/upcomingEvents";
import "../App.css"


export default function Home (){
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar />
            <Hero />
            
            <br></br>
            <AlertMessage />    
            <br></br>
            <div className="grid grd-cols-1 sm:grid-cols-5 gap-4">
                <div class="col-span-2"><UpcomingEvents/></div>
                <div class="col-span-2"><LatestNews/></div>
                
                <div class="col-span-1"><Awards /></div>
            </div>
            <br></br>
            {/* without avi bandi */}
            <SponsorsHomePage />
            
            <Footer />

            

            <br></br>
        </div>
    )
}
