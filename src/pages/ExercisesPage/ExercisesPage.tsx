import { Exercises } from "@components/Exercises";
import { Container } from "@components/layout/Container";
import { Heading } from "@ui/Heading";

export const ExercisesPage = () => {
  return (
    <Container>
      <Heading as="h1" variant="large">
        Exercises
      </Heading>
      <Exercises />
    </Container>
  );
};
