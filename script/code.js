function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    var bmi = weight / (height * height);
    var bmiText = 'Your BMI is ' + bmi.toFixed(2) + '. ';

    if (bmi < 18.5) {
        bmiText += 'You are underweight.';
    } else if (bmi < 25) {
        bmiText += 'You have a normal weight.';
    } else if (bmi < 30) {
        bmiText += 'You are overweight.';
    } else {
        bmiText += 'You are obese.';
    }

    document.getElementById('result').innerHTML = bmiText;
}
