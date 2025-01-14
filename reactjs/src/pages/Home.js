import Footer from "../components/footer";
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import LatestNews from "../components/lastestNews";
import AlertMessage from "../components/alertMessage";
import Awards from "../components/awards";
import UpcomingEvents from "../components/upcomingEvents";
import Timeline from "../components/timeline";
import YouTubeEmbed from "../components/YoutubeEmbed";
import { Link } from 'react-router-dom'
import "../App.css"


export default function Home (){
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar />
        
            <Hero />
            {/* Use the following only if you want to have a pop up */}
            <AlertMessage/>
            

            <br></br>

            <br></br>
            <div className="grid grd-cols-1 sm:grid-cols-4 gap-4">
                <div class="col-span-3">
                    <UpcomingEvents/>
                    <LatestNews/>  
                </div>
                
                <div class="col-span-1"><Awards /></div>
            </div>
            
            <br></br>
            <Timeline    />

            <Footer />

            

            <br></br> 
        </div>
    )
}
