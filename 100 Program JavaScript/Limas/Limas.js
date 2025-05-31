const jlst = document.getElementById('jumlahluassisitegak')
const ts = document.getElementById('tinggisisi')
const la = document.getElementById('luasalas')
const btnluaslimas = document.getElementById('btn-luaslimas')
const luas = document.getElementById('luas')
const volume = document.getElementById('volume')
const btnvolume = document.getElementById('btn-volumelimas')
const la2 = document.getElementById('luasalas2')

function hitungvolume(la2, ts) {
  return (1/3) * la2 * ts
}

btnluaslimas.addEventListener ('click', function(){
  let hitungluas = parseInt(la.value) + parseInt(jlst.value)
  luas.textContent = hitungluas.toLocaleString('id-ID', { maximumFractionDigits: 3})
})

btnvolume.addEventListener ('click', function(){
  volume.textContent = hitungvolume(la2.value, ts.value).toLocaleString('id-ID', { maximumFractionDigits: 3})
})