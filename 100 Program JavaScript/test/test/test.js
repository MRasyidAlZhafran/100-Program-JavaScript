// get the HTML component
const angka1 = document.getElementById("angka1")
const angka2 = document.getElementById("angka2")
const btnHitung = document.getElementById('btn-hitung');
const hasil = document.querySelector('#txt-hasil');

// get the value/hasil


btnHitung.addEventListener('click', function () {
  let hasilHitung = parseInt(angka1.value) * parseFloat(angka2.value)
  hasil.textContent = hasilHitung
})