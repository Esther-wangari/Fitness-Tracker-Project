function History ({ workouts }) {
    if (workouts.length === 0){
        return <p> no workouts logged yet. </p>
    }

    return (
        <div>
      <h1 className="text-2xl font-bold mb-4">Workout History</h1>

      <div className="space-y-4">
        {workouts.map((w) => (
          <div key={w.id} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{w.exercise}</h2>
            <p>Date: {w.date}</p>
            <p>
              {w.sets} × {w.reps} @ {w.weight}kg
            </p>
            <p className="text-sm text-gray-500">{w.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
