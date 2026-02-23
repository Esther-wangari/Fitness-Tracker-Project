import {useEffect, useState ,useMemo } from "react";

import ProgressChart from "../components/ProgressChart";

function calculateTotalWeight(exercises) {
  return exercises.reduce((total, exercise) => {
    return total + exercise.weight * exercise.reps;
  }, 0);
}

function Dashboard() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    // Simulate fetching data from an API
    setTimeout(() => {
      const fetchedExercises = [
        { id: 1, name: "Bench Press", weight: 100, reps: 10 },
        { id: 2, name: "Squats", weight: 150, reps: 8 },
        { id: 3, name: "Deadlift", weight: 200, reps: 5 },
      ];
      setExercises(fetchedExercises);
      setLoading(false);
    }, 1000);
  }
  , []);

  const totalWeight = useMemo(() => calculateTotalWeight(exercises), [exercises]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold text-red-500">{error}</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-xl">Total Weight Lifted: {totalWeight} lbs</p>
    </div>
  );

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Progress Chart</h2>
      {/* ProgressChart component would be rendered here */}
    </div>
  </div>
}

export default Dashboard;
