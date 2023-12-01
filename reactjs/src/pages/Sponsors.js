import AnchorLink from "react-anchor-link-smooth-scroll";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

export default function Sponsors() {
    const sponsorsDict = [
        {
            name: "Medtronic",
            company_link: "https://www.medtronic.com/us-en/index.html",
            logoSource: "\\sponsorLogoes\\medtronicLogo.jpg",
            desc: "Medtronic, a radiant force in healthcare innovation, marks its legacy of transforming lives through cutting-edge medical technologies, promising a sparkling future of health and well-being."
        },
        {
            name: "Home Depot",
            company_link: "https://corporate.homedepot.com/",
            logoSource: "\\sponsorLogoes\\homeDepotLogo.png",
            desc: "Home Depot, a beacon of home improvement brilliance, sparks inspiration for DIY enthusiasts worldwide. Cheers to a sparkling future filled with endless possibilities, guided by Home Depot's dedication to making every project a success."
        },
        {
            name: "Philips",
            company_link: "https://www.philips.com/global",
            logoSource: "\\sponsorLogoes\\philipsSponsorLogo.jpg",
            desc: "Philips, a beacon of innovation in technology and healthcare, sparks inspiration globally. Cheers to a sparkling future filled with endless possibilities, guided by Philips' dedication to improving lives through cutting-edge solutions."
        },
        {
            name: "Novo Engineering",
            company_link: "https://novoengineering.com/",
            logoSource: "\\sponsorLogoes\\novoEngineeringSponsorLogo.png",
            desc: "The 4-H program teaches and trains both urban and rural kids in a variety of subjects. Our missions align to help youth and improve the world around them. They encourage Stryke Force students to develop their leadership and give back to the community."
        },
        {
            name: "Turck",
            company_link: "https://www.turck.us/en/",
            logoSource: "\\sponsorLogoes\\turckLogo.png",
            desc: "Turck, a beacon of innovation in industrial automation, sparks inspiration with its advanced solutions. Cheers to a sparkling future filled with endless possibilities, guided by Turck's dedication to excellence in the realm of industrial technology."
        },
        {
            name: "Wayzata High School",
            company_link: "https://www.wayzataschools.org/whs",
            logoSource: "\\sponsorLogoes\\whsLogo.png",
            desc: "As the biggest public school in Minnesota, Wayzata high school has given us the opportunities needed to excel in every way! Special thanks to Wayzata education fund for granting us a plasma cutter and a vacuum former."
        }
    ]
    return (
        <div>
            <NavBar />
            <div className="max-w-3xl mx-auto">
                <h1 className="font-bold text-2xl pt-6">Sponsors of Trojan Robotics</h1>
                <div>
                    <h3 className="text-gray-700 pt-2">
                        We are grateful to our Trojan Robotics sponsors who have helped us make an impact on our students every year. The organizations listed below provide generous financial support, materials and services to make our program possible.
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
                        {
                            sponsorsDict.map((eachSponsor) => {
                                return (
                                    <div className="">
                                        <a target="_target" href={eachSponsor.company_link}>
                                            <img
                                                alt="sponsor logo"
                                                className="mx-auto"
                                                width="160px"
                                                height="160px"
                                                src={eachSponsor.logoSource}
                                            />
                                        </a>
                                        {/* <h3 className="text-blue-800 font-bold text-lg text-center">Medtronic</h3> */}
                                        <p className="text-gray-700 text-center text-xs pt-2">{eachSponsor.desc}</p>
                                    </div>
                                );
                            })

                        }





                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}