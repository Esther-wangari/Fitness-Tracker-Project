function History ({ workouts }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Workout History</h2>

        {workouts.map(workout => (
          <div key={workout.id} 
          className="bg-white p-4 rounded shadow mb-4">
            <p><strong>Exercise:</strong> {workout.exercise}</p>
            <p><strong>Date:</strong> {workout.date}</p>
            <p><strong>Sets:</strong> {workout.sets}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Weight:</strong> {workout.weight}kg</p>
          </div>
        ))}
      </div>
    )

}

export default History;