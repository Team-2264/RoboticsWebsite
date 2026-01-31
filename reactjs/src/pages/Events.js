import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import Datebar from "../components/dateBar";
import events from "../data/events";

export default function Events() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <NavBar />
      <div className="max-w-3xl mx-auto">
        <br></br>
        <h1 className="font-bold text-2xl text-left pt:8">
          {currentYear} Season Events
        </h1>
        <h2 className="pt-2 text-gray-700">
          Join us in person or stream the event online and cheer us on!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
          {events
            .filter(event => Number(event.year) === currentYear)
            .map((event) => {
              return (
                <Datebar
                  key={event.name}
                  month={event.month}
                  date={event.date}
                  name={event.name}
                  location={event.location}
                />
              );
            })}
        </div>

        <br></br>
       <h1 className="font-bold text-2xl text-left pt:8">2026 Season Calender</h1>
      <iframe
  src="https://calendar.google.com/calendar/embed?src=2c8cf6f817ac7ac139ce0482a8f6522abb0dae86dd7bd7273cc6645876464b3@group.calendar.google.com&ctz=America/Chicago"
  style={{ border: 0 }}
  width={800}
  height={600}
  frameBorder={0}
  scrolling="no"
  title="Calendar"
/>





      </div>
      <Footer />
    </div>
  );
}
