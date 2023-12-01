import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import Datebar from "../components/dateBar";
export default function Events() {
    const events = [
        {
            name: "Lake Superior Regional",
            month: "Mar",
            date: "7",
            location: "Duluth MN"
        }
    ]
    return (
        <div>
            <NavBar />
            <div className="max-w-3xl mx-auto">
                <br></br>
                <h1 className="font-bold text-2xl text-left pt:8">2024 Season Events</h1>
                <h2 className="pt-2 text-gray-700">Join us in person or stream the event online and cheer us on!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <Datebar />
                    <Datebar />
                    <Datebar />
                    <Datebar />
                    <Datebar />
                </div>

                <br></br>
                <h1 className="font-bold text-2xl text-left pt:8">2024 Season Calender</h1>
                <h2 className="pt-2 pb-2 text-gray-700">All are welcome to join our practices!</h2>
                <iframe src="https://calendar.google.com/calendar/embed?src=c_50f9f877592d5a9700eaa8edacf8d940d3a7677688a6e836657bdd0269d92434%40group.calendar.google.com&ctz=America%2FChicago" width="800" height="700"></iframe>
            </div>
            <Footer />
        </div>
    )
}