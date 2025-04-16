const exercises = new Map();

function submitForm() {
  const form = document.getElementById('exercise_form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(form) && addExercise(form) ? alert('Form submitted successfully!') : alert('Form submission failed!');
  });
}

function validateForm(form) {
  const exercise = form.exercise.value;
  const reps = form.reps.value;
  if (!exercise || !reps) {
    alert('Please fill out all required fields');
    return false;
  }
  if (reps < 0) {
    alert('Reps must be a positive number');
    return false;
  }
  return true;
}

function addExercise(form) {
  const exercise = form.exercise.value;
  const reps = form.reps.value;

  exercises.set(exercise, [{ exercise: exercise, reps: parseInt(reps) }]);

  console.log(exercises);

  return true;
}