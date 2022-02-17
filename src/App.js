import { Routes, Route } from "react-router-dom";
import AddEventPage from "./components/AddEventPage";
import AddingEvent from "./components/AddingEvent";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <h1>Simple Google Calendar</h1>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/addevent" element={<AddEventPage />} />
        <Route exact path="/addingevent" element={<AddingEvent />} />
      </Routes>
    </>
  );
}

export default App;
