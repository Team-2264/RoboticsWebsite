import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import newsLetterData from "../data/newsLetterData";

export default function News() {
  return (
    <div>
      <NavBar />
      <br />

      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">
          Trojan Robotics News Letters
        </h1>

        <p className="text-gray-700 pt-2">
          All the latest Trojan Robotics news letters straight from the team!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 pt-6">
          {[...newsLetterData]
            .sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            )
            .map((newsLetterItem, index) => (
              <Link
                key={index}
                to={newsLetterItem.srcOfNewsLetter}
                target="_blank"
                rel="noreferrer"
              >
                <div className="shadow-2xl rounded-lg h-full">
                  <img
                    className="w-full h-45 object-cover rounded-t-lg"
                    src={newsLetterItem.srcOfImage}
                    alt=""
                  />

                  <div className="p-5">
                    <p className="text-sm text-gray-700 pt-1">
                      {newsLetterItem.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}

