import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddWorkout from "./pages/AddWorkout";
import History from "./pages/History";
import Exercises from "./components/Exercises";
import ErrorBoundary from "./components/ErrorBoundary";
import React from "react";
import { useEffect,useState } from "react";

function App() {
  const [workouts, setWorkouts] = useState([]);
 
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Routes>
            <Route path="/" element={<Dashboard workouts={workouts} />} />
            <Route path="/add" element={<AddWorkout setWorkouts={setWorkouts} />} />
            <Route path="/history" element={<History workouts={workouts} />} />
            <Route path="/Exercises" element={<Exercises />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;