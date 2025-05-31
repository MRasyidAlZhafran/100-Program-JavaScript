const reamur = document.getElementById('reamur')
const btnreamur = document.getElementById('btn-reamur')
const fahrenheit = document.getElementById('fahrenheit')
const celcius = document.getElementById('celcius')
const kelvin = document.getElementById('kelvin')

function hitungfahrenheit(r) {
  return ((9/5 * r) + 32)
}

function hitungcelcius(r) {
  return ((5/4) * r)
}

function hitungkelvin(r) {
  return ((5/4 * r) + 273)
}

btnreamur.addEventListener('click', function () {
  fahrenheit.textContent = hitungfahrenheit(reamur.value)
  celcius.textContent = hitungcelcius(reamur.value)
  kelvin.textContent = hitungkelvin(reamur.value)
})