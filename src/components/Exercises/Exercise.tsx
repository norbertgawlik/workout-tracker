import { ExerciseType } from "@mytypes/exercise";

export const Exercise = (data: ExerciseType) => {
  const { name, category, link } = data;
  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{link}</p>
    </div>
  );
};
