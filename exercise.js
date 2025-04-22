function addExercise(form) {
  const exercise = form.exercise.value;
  const reps = form.reps.value;

  let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

  exercises.push({ exercise, reps });

  localStorage.setItem('exercises', JSON.stringify(exercises));

  form.reset();

  return true;
}