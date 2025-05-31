const jarijari = document.getElementById('r')
const btnlv = document.getElementById('btn-lv')
const luas = document.getElementById('luas')
const volume = document.getElementById('volume')

const phi = 3.14

function hitungluas(r) {
  return phi * r ** 2
}

function hitungvolume(r) {
  return (4/3) * phi * r**3
}

btnlv.addEventListener ('click', function(){
  luas.textContent = hitungluas(jarijari.value).toLocaleString('id-ID', { maximumFractionDigits: 3})
  volume.textContent = hitungvolume(jarijari.value).toLocaleString('id-ID', { maximumFractionDigits: 3})
})