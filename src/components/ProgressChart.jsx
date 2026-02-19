import{
    chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export default function ProgressChart({ workouts }) {
    const exerciseMap = {};
    workouts.forEach(workout => {
        if (!exerciseMap[workout.exercise]) {
            exerciseMap[workout.exercise] = 0;
        }
        exerciseMap[workout.exercise] += workout.sets * workout.reps;
    });

    const data = {
        labels: Object.keys(exerciseMap),
        datasets: [
            {
                label: 'Total Reps',
                data: Object.values(exerciseMap),
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    };
    return <Bar data={data} />;
}