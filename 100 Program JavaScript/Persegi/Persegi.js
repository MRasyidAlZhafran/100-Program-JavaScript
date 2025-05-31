const sisi = document.getElementById('sisi')
const luas = document.getElementById('luas')
const btnPersegi = document.getElementById('btn-persegi');
const keliling = document.getElementById('keliling');

function hitungluas(s) {
  return (s * s)
}

function hitungKeliling(s) {
  return (4 * s)
}

btnPersegi.addEventListener('click', function() {
  luas.textContent = hitungluas(sisi.value)
  keliling.textContent = hitungKeliling(sisi.value)
})