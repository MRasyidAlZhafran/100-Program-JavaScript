const reamur = document.getElementById('reamur')
const btnkelvin = document.getElementById('btn-kelvin')
const fahrenheit = document.getElementById('fahrenheit')
const celcius = document.getElementById('celcius')
const kelvin = document.getElementById('kelvin')

function hitungcelcius(k) {
  return (k - 273)
}

function hitungfahrenheit(k) {
  return ((k * 9/5) - 459.67)
}

function hitungreamur(k) {
  return (4/5 * (k - 273))
}

btnkelvin.addEventListener('click', function () {
  fahrenheit.textContent = hitungfahrenheit(kelvin.value)
  celcius.textContent = hitungcelcius(kelvin.value)
  reamur.textContent = hitungreamur(kelvin.value)
})