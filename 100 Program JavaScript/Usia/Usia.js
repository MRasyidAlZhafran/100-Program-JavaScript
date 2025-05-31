const usia = document.getElementById('usia');
const btnusia = document.getElementById('btn-usia');
const umur = document.getElementById('umur');
const grade = document.getElementById('tingkat');

function tingkatUsia(usia){
  let tingkat;

  if(usia < 0) {
    tingkat = "Belum Lahir!"
  } else if (usia < 6) {
    tingkat = "Usia Balita";
  } else if (usia < 13) {
    tingkat = "Usia Masih Anak-Anak";
  } else if (usia < 26) {
    tingkat = "Usia Sudah Remaja";
  } else if (usia < 35) {
    tingkat = "Usia Sudah Mulai Tua";
  } else {
    tingkat = "Usia Sudah Tua";
  }

  return tingkat;
}

btnusia.addEventListener('click', function() {
  umur.textContent = usia.value
  grade.textContent = tingkatUsia(usia.value)
})
