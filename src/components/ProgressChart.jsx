import react from "react";
import { useEffect,useState,useMemo } from "react";
import {line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ProgressChart({ workouts }) {
  const data = {
    labels: workouts.map((workout) => new Date(workout.date).toLocaleDateString()),
    datasets: [
      {
        label: "Total Weight Lifted",
        data: workouts.map((workout) => workout.weight * workout.reps * workout.sets),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <line data={data} />;
}

export default ProgressChart;

