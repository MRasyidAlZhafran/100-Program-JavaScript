const reamur = document.getElementById('reamur')
const btnfahrenheit = document.getElementById('btn-fahrenheit')
const fahrenheit = document.getElementById('fahrenheit')
const celcius = document.getElementById('celcius')
const kelvin = document.getElementById('kelvin')

function hitungcelcius(f) {
  return (5/9 * (f - 32))
}

function hitungreamur(f) {
  return (4/9 * (f - 32))
}

function hitungkelvin(f) {
  return (5/9 * (f + 459.67))
}

btnfahrenheit.addEventListener('click', function () {
  celcius.textContent = hitungcelcius(fahrenheit.value)
  reamur.textContent = hitungreamur(fahrenheit.value)
  kelvin.textContent = hitungkelvin(fahrenheit.value)
})