function submitForm() {
  const form = document.getElementById('exercise_form');
  console.log(form)
  form.addEventListener('submit', (event) => {
    console.log(form)
    event.preventDefault();
    console.log(validateForm(form));
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