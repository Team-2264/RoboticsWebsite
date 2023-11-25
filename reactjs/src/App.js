import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/noPage";
// import React from "react";
// import NavBar from "./components/NavBar";
// import Hero from "./components/hero";
// import LatestNews from "./components/lastestNews";
// import SponsorsHomePage from "./components/sponsorsHomePage";
// import Footer from "./components/footer";
// import "./App.css"
// 
// 
// 
// 

const App = () => {

    return (
        <div className="max-w-8xl m-auto px-4 sm:px-6 lg:px-8">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;