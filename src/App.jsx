import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddWorkout from "./pages/AddWorkout";
import History from "./pages/History";
import Exercises from "./Exercises";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workoutData) => {
    const newWorkout = {
      id: Date.now(),
      ...workoutData,
      sets: Number(workoutData.sets),
      reps: Number(workoutData.reps),
      date: new Date().toLocaleDateString(),
      exercise: workoutData.name,
      weight: 0, // Default weight
      notes: "" // Default notes
    };
    setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
    return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard workouts={workouts} />} />
        <Route path="/add" element={<AddWorkout onAddWorkout={addWorkout} />} />
        <Route path="/history" element={<History workouts={workouts} />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </div>
  );
  };
}

export default App;
