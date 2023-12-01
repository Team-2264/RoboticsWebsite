import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/noPage";
import MentorsAndCoaches from "./pages/MentorsAndCoaches";
import Students from "./pages/students";
import OutReach from "./pages/OutReach";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";

const App = () => {

    return (
        <div className="max-w-8xl m-auto px-4 sm:px-6 lg:px-8">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Sponsors />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/mentors' element={<MentorsAndCoaches />}/>
                    <Route path='/students' element={<Students/>} />
                    <Route path='/outreach' element={<OutReach />}/>
                    <Route path='/events' element={<Events />}/>
                    <Route path='/sponsors' element={<Sponsors />}/>
                    <Route path="*" element={<NoPage />}></Route>

                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;




