const form = document.querySelector('form');
// this usecase value is give you empty.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // display result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      console.log(`He is weak ${bmi}`);
    } else if (bmi > 18.6 || bmi < 25) {
      console.log(`He is normal ${bmi}`);
    } else {
      console.log(`He is overweight ${bmi}`);
    }
  }

  console.log(results);
});
