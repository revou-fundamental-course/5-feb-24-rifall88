document.addEventListener('DOMContentLoaded', function () {
    var inputCelsius = document.querySelector('.input-field');
    var inputFahrenheit = document.querySelector('.input-field1');
    var calculationMethod = document.querySelector('.input-field2');
  
    var convertButton = document.querySelector('.tombol1');
    var resetButton = document.querySelector('.tombol2');
    var reverseButton = document.querySelector('.tombol3');
  
    convertButton.addEventListener('click', function () {
      var celsius = parseFloat(inputCelsius.value);
  
      if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        inputFahrenheit.value = fahrenheit.toFixed(2);
        calculationMethod.value = 'Celsius to Fahrenheit: (°C × 9/5) + 32';
      } else {
        reset();
        calculationMethod.value = 'Masukkan suhu yang valid';
      }
    });
  
    resetButton.addEventListener('click', function () {
      inputCelsius.value = '';
      inputFahrenheit.value = '';
      calculationMethod.value = '';
    });
  
    reverseButton.addEventListener('click', function () {
      var celsius = parseFloat(inputCelsius.value);
  
      if (!isNaN(celsius)) {
        var reversedCelsius = -celsius;
        inputCelsius.value = reversedCelsius.toFixed(2);
        inputFahrenheit.value = '';
        calculationMethod.value = 'Reverse Celsius: -°C';
      } else {
        reset();
        calculationMethod.value = 'Masukkan suhu yang valid';
      }
    });
  
    function reset() {
      inputCelsius.value = '';
      inputFahrenheit.value = '';
      calculationMethod.value = '';
    }
  });