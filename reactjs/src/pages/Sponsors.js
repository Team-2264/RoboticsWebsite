import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import sponsorsDict from "../data/sponsors";

export default function Sponsors() {
  let windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  let year = params.get("year");

  if (!year) {
    year = new Date().getFullYear().toString(); // Make sure it's a string
  }

  return (
    <div>
      <NavBar />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl pt-6">Sponsors of Trojan Robotics</h1>
        <p className="text-gray-700 pt-2">
          We are grateful to our Trojan Robotics sponsors who have helped us make an impact on our students every year. The organizations listed below provide generous financial support, materials, and services to make our program possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
          {sponsorsDict
            .filter((sponsor) => sponsor.year === year) // compare as strings
            .map((sponsor, index) => (
              <div key={index}>
                {sponsor.company_link ? (
                  <a target="_blank" rel="noopener noreferrer" href={sponsor.company_link}>
                    <img
                      alt={`${sponsor.name} logo`}
                      className="mx-auto"
                      width="160px"
                      height="160px"
                      src={sponsor.logoSource}
                    />
                  </a>
                ) : (
                  <img
                    alt={`${sponsor.name} logo`}
                    className="mx-auto"
                    width="160px"
                    height="160px"
                    src={sponsor.logoSource}
                  />
                )}
                <p className="text-gray-700 text-center text-xs pt-2">{sponsor.name}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

