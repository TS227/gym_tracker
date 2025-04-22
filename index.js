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

function submitForm() {
  const form = document.getElementById('exercise-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(form) && addExercise(form) ? alert('Form submitted successfully!') : alert('Form submission failed!');
  });
}

function addExercise(form) {
  const exercise = form.exercise.value;
  const reps = form.reps.value;

  let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

  exercises.push({ exercise, reps });

  localStorage.setItem('exercises', JSON.stringify(exercises));

  form.reset();

  return true;
}

function loadExercises() {
  const tblBody = document.getElementById('exercise-table');
  const exercises = JSON.parse(localStorage.getItem('exercises')) || [];

  exercises.forEach(({ exercise, reps }) => {
    const row = document.createElement('tr');
    const cellExercise = document.createElement("td");
    const cellReps = document.createElement("td");

    cellExercise.appendChild(document.createTextNode(exercise));
    cellReps.appendChild(document.createTextNode(reps))
    row.append(cellExercise, cellReps);
    tblBody.appendChild(row)

  });
}

