import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import sponsorsDict from "../data/sponsors";
export default function Sponsors() {
let windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
let year=params.get("year");
if (year==null){
    year=new Date().getFullYear();
}
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
                            sponsorsDict.filter(p => {return p.year==year}).map((eachSponsor) => {
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