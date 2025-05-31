const massa = document.getElementById('massa')
const kecepatan = document.getElementById('kecepatan')
const ek = document.getElementById('hasil')
const btnek = document.getElementById('btn-ek')
const hasilKonversi = document.getElementById('konversi');


function hitungek(m, v) {
  return 0.5 * m * v**2
}

btnek.addEventListener ('click', function(){
  ek.textContent = hitungek(parseFloat(massa.value), parseFloat(kecepatan.value)).toLocaleString('id-ID', { maximumFractionDigits: 3}) + ' J';
  
  ek = ek.style.textDecoration = "underline 1px"
})

