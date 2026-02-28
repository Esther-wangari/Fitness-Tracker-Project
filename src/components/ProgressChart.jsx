import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ workouts }) {
const labels = workouts.map((workout, index) => `${workout.name} (${index + 1})`);
const data = {
  labels,
  datasets: [
    {
      label: "Total Reps",
      data: workouts.map(workout => workout.sets * workout.reps),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ],
}

  return (<div className="p-4">
      <h2 className="text-xl font-bold mb-4">Progress Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default ProgressChart;