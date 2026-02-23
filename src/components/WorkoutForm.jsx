import { useState } from "react";

function WorkoutForm({addWorkout}) {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWorkout = {
            id: Date.now(),
            date: new Date().toISOString(),
            exercise,
            sets: parseInt(sets),
            reps: parseInt(reps),
            weight: parseFloat(weight)
        };

        addWorkout(newWorkout);
        setExercise("");
        setSets("");
        setReps("");
        setWeight("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <input
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                placeholder="Exercise"
                className="w-full p-2 border rounded mb-2"
            />
            <input
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="Sets"
                className="w-full p-2 border rounded mb-2"
            />
            <input
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="Reps"
                className="w-full p-2 border rounded mb-2"
            />
            <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
                className="w-full p-2 border rounded mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Workout
            </button>
        </form>
    );
}

export default WorkoutForm;