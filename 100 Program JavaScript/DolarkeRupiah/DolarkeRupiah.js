document.getElementById('konversi').addEventListener("click", function() {
  let dolar = parseFloat(document.getElementById("dolar").value);
  const kurs = 16285;
  let rupiah = dolar * kurs;

  if (!isNaN(dolar)) {
      document.getElementById("hasil").textContent = `$${dolar.toFixed(2)} di konversi menjadi Rp.${rupiah.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  } else {
      document.getElementById("hasil").textContent = "Masukkan jumlah dolar yang valid!";
  }
});
