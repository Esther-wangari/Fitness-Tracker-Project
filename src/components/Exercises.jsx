import {useState, useEffect} from "react";
import axios from "axios";

function Exercises() {
  const [exercise, setExercise] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = [
          {
            "id": 1, name: "Push-up"
          },
          {
            "id": 2, name: "Squat"
          },
          {   "id": 3, name: "Lunge"
            
          }
          
        ]
        setExercise(data);
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

export default Exercises;
  
