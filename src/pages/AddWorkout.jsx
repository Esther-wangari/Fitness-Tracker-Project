import React, { useState } from "react";

function AddWorkout({ onAddWorkout }) {
  const [form, setForm] = useState({ name: "", sets: "", reps: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddWorkout) {
      onAddWorkout(form);
      setForm({ name: "", sets: "", reps: "" });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Workout</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Exercise Name"
          className="border p-2 rounded"
          required
        />
        <input
          name="sets"
          type="number"
          value={form.sets}
          onChange={handleChange}
          placeholder="Sets"
          className="border p-2 rounded"
          required
          min="1"
        />
        <input
          name="reps"
          type="number"
          value={form.reps}
          onChange={handleChange}
          placeholder="Reps"
          className="border p-2 rounded"
          required
          min="1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
}

export default AddWorkout;
