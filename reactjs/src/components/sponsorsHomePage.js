import React from "react"

const SponsorsHomePage = () => {

    const sponsorInform = [
        "/sponsorLogoes/homeDepotLogo.png",
        "/sponsorLogoes/medtronicLogo.jpg",
        "/sponsorLogoes/philipsSponsorLogo.jpg",
        "/sponsorLogoes/turckLogo.png",
        "/sponsorLogoes/novoEngineeringSponsorLogo.png",
        "/sponsorLogoes/whsLogo.png"
    ]

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="text-2xl font-bold">Sponsors</h1>
                    <p className="text-gray-700 pt-1">
                        We are grateful to our Trojan Robotics sponsors who have helped us make an impact on our students every year. The organizations listed below provide generous financial support, materials and services to make our program possible.
                    </p>
                </div>
            </div>
            <br></br>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {sponsorInform.map((sponsorInfo) => {
                    return (
                        <div className="m-auto justify-center">
                            <img
                                alt=""
                                height="90"
                                width="160"
                                className="grayscale m-auto justify-center"
                                src={sponsorInfo}
                            />
                        </div>
                    )
                })}
            </div >
        </div>
    );
}

export default SponsorsHomePage;