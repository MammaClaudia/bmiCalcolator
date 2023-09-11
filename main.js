function calculateBMI(weight, height) {
  // Calculate BMI using the formula: weight / (height * height)
  const bmi = weight / Math.pow(height,2);

  // Return the rounded BMI value
  return Math.round(bmi);
}
const weight = 70; // in kilograms
const height = 1.75; // in meters

const bmi = calculateBMI(weight, height);
console.log('Your BMI is ' + bmi );
