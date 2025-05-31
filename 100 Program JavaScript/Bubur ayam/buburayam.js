
document.getElementById('pilihanBubur').addEventListener('change', function() {
  let pilihan = this.value;
  let pertanyaanAduk = document.getElementById('pertanyaanAduk');
  
  if (pilihan === "iya") {
      pertanyaanAduk.style.display = "block";
  } else {
      pertanyaanAduk.style.display = "none";
      document.getElementById('hasil').textContent = "Mungkin lain kali!";
  }
});

document.getElementById('pilihanAduk').addEventListener('change', function() {
  let pilihanAduk = this.value;
  let hasil = document.getElementById('hasil');

  if (pilihanAduk === "iya") {
      hasil.textContent = "Yang Penting Mah Enak :)";
  } else if (pilihanAduk === "tidak") {
      hasil.textContent = "Wow Kamu Orangnya Elegan!";
  }
});