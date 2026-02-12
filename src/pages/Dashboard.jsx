function Dashboard ({ workouts}) {
    const totalWorkouts = workouts.length;

    const totalVolume = workouts.reduce(
        (sum, w) => sum + w.sets * w.reps * w.weight, 0
    );

    return (
        <div> 
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Workouts</p>
          <p className="text-2xl font-bold">{totalWorkouts}</p>
        </div>

          <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total volume</p>
          <p className="text-2xl font-bold">{totalVolume}</p>
        </div>

        </div>
        </div>

    );

}
 export default Dashboard;