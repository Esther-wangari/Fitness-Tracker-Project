import axois from "axios";

const BASE_URL = "http://wger.de/api/v2/exercise/?language=2&limit=20";
export const fetchExercises = async () => {
    try {
        const response = await axois.get(BASE_URL);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
    }
};