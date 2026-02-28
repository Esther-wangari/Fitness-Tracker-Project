function WorkoutHistory( {workouts} ) {
  if (workouts.length === 0) {
    return <p className="text-center text-gray-500">No workouts logged yet.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Workout History</h2>
      <ul className="space-y-2">
        {workouts.map((workout, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{workout.name}</h3>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutHistory;