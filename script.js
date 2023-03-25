function calculateMean() {
  const numbersInput = document.getElementById("numbers");
  const numbers = numbersInput.value.split(" ");
  const mean = calculateMeanFromArray(numbers);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "الوسط الحسابي = " + mean;
}

 function calculateMeanFromArray(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    const mean = sum / numbers.length;
    return mean;
  }
