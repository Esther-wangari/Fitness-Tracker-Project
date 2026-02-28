import {useState, useEffect} from "react";
import axios from "axios";

export default function Exercises() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Exercises</h1>
      <Exercises />
    </div>
  );
}

function Exercises() {
  const [exercise, setExercise] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get("https://wger.de/api/v2/exerciseinfo/");
        setExercise(response.data.results);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
  
    fetchExercises();
  }, []);

  const filteredExercises = exercise.filter(ex =>
    ex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {filteredExercises.map(exercise => (
        <div key={exercise.id} className="bg-white p-4 rounded shadow mb-2">
          <h3 className="text-lg font-semibold">{exercise.name}</h3>
    </div>
      ))}
    </div>
  );
}
  
