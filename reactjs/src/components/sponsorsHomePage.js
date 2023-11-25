import React from "react"

const SponsorsHomePage = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="text-2xl font-bold">Sponsors</h1>
                    <p className="text-gray-700">
                    We are grateful to our Trojan Robotics sponsors who have helped us make an impact on our students every year. The organizations listed below provide generous financial support, materials and services to make our program possible.
                    </p>
                </div>
            </div>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-1 justify-center lg:col-span-1 m-auto">
                    <img className="grayscale" src="/assets/images/homeDepotLogo.png" />
                </div>

            </div >
        </div>
    );
}

export default SponsorsHomePage;