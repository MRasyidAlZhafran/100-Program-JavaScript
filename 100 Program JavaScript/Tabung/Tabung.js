const jarijari = document.getElementById('r')
const tinggi = document.getElementById('t')
const btntabung = document.getElementById('btn-tabung')
const luas = document.getElementById('luas')
const volume = document.getElementById('volume')

const phi = 3.14

function luastabung(r, t) {
  return 2 * (phi * r * (r + t))
}

function volumetabung(r, t) {
  return phi * r * r * t
}

btntabung.addEventListener('click', function () {
  luas.textContent = luastabung(jarijari.value, tinggi.value)
  volume.textContent = volumetabung(jarijari.value, tinggi.value)
})