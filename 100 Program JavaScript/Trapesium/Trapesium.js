function trapesium() {
  const pssa = parseInt(prompt("Masukkan Nilai Panjang Sisi Sejajar Atas :"));
  console.log(`Panjang Sisi Sejajar Atas: ${pssa}`);

  const pssb = parseInt(prompt("Masukkan Nilai Panjang Sisi Sejajar Bawah :"));
  console.log(`Panjang Sisi Sejajar Bawah: ${pssb}`);

  const t = parseInt(prompt("Masukkan Nilai Tinggi :"));
  console.log(`Tinggi: ${t}`);

  const ab = parseInt(prompt("Masukkan Sisi AB :"));
  console.log(`Sisi AB: ${ab}`);

  const bc = parseInt(prompt("Masukkan Sisi BC :"));
  console.log(`Sisi BC: ${bc}`);

  const cd = parseInt(prompt("Masukkan Sisi CD :"));
  console.log(`Sisi CD: ${cd}`);

  const ad = parseInt(prompt("Masukkan Sisi AD :"));
  console.log(`Sisi AD: ${ad}`);

  const keliling = (ab, bc, cd, ad) => ab + bc + cd + ad;
  const luas = (pssa, pssb, t) => 0.5 * (pssa + pssb) * t;

  console.log(`Hasil Dari Luas Trapesium Yaitu: ${luas(pssa, pssb, t)}`);
  console.log(`Hasil Dari Keliling Trapesium Yaitu: ${keliling(ab, bc, cd, ad)}`);
}

trapesium();