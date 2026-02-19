import { useEffect, useState } from "react";

export default function Exercises({ }) {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
}

  useEffect(() => {
    const fetchExercises = async () => {
      try { 
        setLoading(true);
        const response = await fetch("https://wger.de/api/v2/exercise/?format=json");

        if (!response.ok) {
          throw new Error("failed to fetch exercises");
        }
        const data = await response.json();
        setExercises(data.results);
      }
      catch (err) {
        setError(err.message);
        setLoading(false);
      }
      finally {
        setLoading(false);
      }

      };
    fetchExercises();
  }, []);
        
  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
    </div>;
  }
    
  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())

  );
 { filteredExercises.length === 0 ? (
  <p className="text-center text-gray-500">No exercises found.</p>
 ) : (
  filteredExercises.map((exercise) => (
    <li key={exercise.id} className="border p-2 rounded">
      {exercise.name}
    </li>
  ))
  
 )
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Exercises</h2>
      <input
        type="text"
        placeholder="Search exercises..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="mb-4 text-sm text-gray-600">
        {filteredExercises.length} exercises found</div>

      <ul className="space-y-2">
        {filteredExercises.length === 0 ? (
          <li>No exercises found.</li>
        ) : (
          filteredExercises.map((exercise) => (
            <li key={exercise.id} className="border p-2 rounded">
              {exercise.name}
            </li>
    



          ))
        )}
      </ul>
    </div>
  );

}
