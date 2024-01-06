import React from "react"
import sponsorsDict from "../data/sponsors";
const SponsorsHomePage = () => {

    const sponsorInform = [
        "https://news.3m.com/image/Trifecta+3M+001+Logo+CMYK_thumb.jpg",
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
                {
                    sponsorsDict.map((sponsorInfo) => (
                        <div className="m-auto justify-center">
                            <img
                                height="90"
                                width="160"
                                className="grayscale m-auto justify-center"
                                alt={sponsorInfo.name}
                                src={sponsorInfo.logoSource}
                            />
                        </div>
                    ))
                }

            </div >
        </div>
    );
}

export default SponsorsHomePage;