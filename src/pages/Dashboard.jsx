import {useState } from "react";
import ProgressChart from "../components/ProgressChart";

function Dashboard() {
  const [workouts, setWorkouts] = useState([
  { id: 1, exercise: "Push Ups", sets: 3, reps: 10 },
  { id: 2, exercise: "Squats", sets: 4, reps: 15 },
  { id: 3, exercise: "Pull Ups", sets: 2, reps: 8 }
  ]);
}

return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    {workouts.length === 0 ? (
      <p className="text-gray-500">No workouts added yet. Start by adding your first workout!</p>
    ) : (
      <ProgressChart workouts={workouts} />
    )}
  </div>
);

export default Dashboard;