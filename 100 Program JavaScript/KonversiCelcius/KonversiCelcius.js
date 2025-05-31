const celcius = document.getElementById('celcius')
const btncelcius = document.getElementById('btn-celcius')
const fahrenheit = document.getElementById('fahrenheit')
const reamur = document.getElementById('reamur')
const kelvin = document.getElementById('kelvin')

function hitungfahrenheit(c) {
  return ((9/5 * c) + 32)
}

function hitungreamur(c) {
  return ((4/5) * c)
}

btncelcius.addEventListener('click', function () {
  fahrenheit.textContent = hitungfahrenheit(celcius.value)
  reamur.textContent = hitungreamur(celcius.value)
  let fixkelvin = parseInt(celcius.value) + 273
  kelvin.textContent = fixkelvin
})