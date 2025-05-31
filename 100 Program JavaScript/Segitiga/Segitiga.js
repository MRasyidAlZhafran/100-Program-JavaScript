const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const btnluassegitiga = document.getElementById('btn-luassegitiga');
const luas = document.getElementById('luas');
const sisi1 = document.getElementById('a')
const sisi2 = document.getElementById('b')
const sisi3 = document.getElementById('c')
const btnkelilingsegitiga = document.getElementById('btn-kelilingsegitiga');
const keliling = document.getElementById('keliling');

function luassegitiga(a, t) {
  return 1/2 * ((a * t))
}

btnluassegitiga.addEventListener('click', function () {
  luas.textContent = luassegitiga(alas.value, tinggi.value)
})

btnkelilingsegitiga.addEventListener('click', function () {
  let hitungKeliling = parseInt(sisi1.value) + parseInt(sisi2.value) + parseInt(sisi3.value)
  keliling.textContent = hitungKeliling
})