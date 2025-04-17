import { useEffect, useState } from "react";
import { fetchExercises } from "../../services/exercisesServices";
import { useApi } from "@hooks/useApi";
import { ERROR_FALLBACK } from "@constants/messages";
import { Alert } from "@ui/Alert";
import { ExerciseType } from "@mytypes/exercise";
import { Exercise } from "./Exercise";

export const Exercises = () => {
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const { data, error, loading } = useApi(() => fetchExercises());

  useEffect(() => {
    if (data) setExercises(data);
    console.log(data);
  }, [data, loading, error]);

  return (
    <div>
      {loading && <Alert variant="success">LOADING...</Alert>}
      {error && <Alert variant="error">{ERROR_FALLBACK}</Alert>}
      {exercises.map((element) => (
        <Exercise key={element.id} {...element} />
      ))}
    </div>
  );
};
