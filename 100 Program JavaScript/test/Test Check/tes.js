//luas : 2 * (phi * r * r) + (phi * d * t)
//volume : Phi * r * r * t

const jarijari = document.getElementById('r')
const tinggi = document.getElementById('t')
const btn = document.getElementById('btn')
const luas = document.getElementById('luas')
const volume = document.getElementById('volume')

const phi = 3.14

function hitungluas(r, t) {
  return 2 * (phi * r * r) + (phi * 2 * r * t)
}

function hitungvolume(r, t) {
  return phi * r * r * t
}

btn.addEventListener('click', function () {
  luas.textContent = hitungluas(jarijari.value, tinggi.value)
  volume.textContent = hitungvolume(jarijari.value, tinggi.value)
})