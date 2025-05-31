//fungsi konvensional
const lebar = document.getElementById('lebar')
const panjang = document.getElementById('panjang')
const tinggi = document.getElementById('tinggi')
const btnpersegipanjang = document.getElementById('btn-persegipanjang');
const luas = document.getElementById('luas');
const volume = document.getElementById('volume');

//onclick function
function hitungluas(p, l, t) {
  return 2 * ((p * l) + (p * t) + (l * t))
}

//arrow function
const hitungVolume = (p,l,t) => p * l * t

btnpersegipanjang.addEventListener('click', function () {
  luas.textContent = hitungluas(panjang.value, lebar.value, tinggi.value)
  volume.textContent = hitungVolume(panjang.value, lebar.value, tinggi.value)
})