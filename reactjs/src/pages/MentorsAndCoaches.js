import React from "react";
import NavBar from "../components/NavBar";

export default function MentorsAndCoaches(){
    return (
        <div>
            <NavBar />
            <br></br>
            <div >
                <h1 className="font-bold text-center text-3xl">Coaches and Mentors</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 md: grid-cols-2 pt-6">
                <h1>Hello world</h1>
                <h1>Hello world</h1>
                <h1>Hello world</h1>
                <h1>Hello world</h1>

            </div>
        </div>
    )
}