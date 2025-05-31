console.log("Jika Membeli 5 Baju Maka, Akan Diskon 6%. Dan Jika Membeli 7 Celana Maka, Akan Diskon 9%");

const namaBarang = prompt("Masukkan Nama Barang (Baju/Celana) \t: ").trim().toLowerCase();
const jumlahBarang = parseInt(prompt("Masukkan Jumlah Barang \t\t\t: "), 10);

console.log("\nHasilnya Adalah:");
console.log(`Nama Barang \t\t\t: ${namaBarang}`);
console.log(`Jumlah Barang \t\t\t: ${jumlahBarang}`);

if (namaBarang === "baju") {
  const harga1 = 50000;
  const totalBayaran1 = jumlahBarang * harga1;

  if (jumlahBarang >= 5) {
    const diskon1 = totalBayaran1 * 0.94;
    const integer = Math.round(diskon1);
    console.log(`Total Bayaran \t\t\t: ${totalBayaran1.toLocaleString('id-ID')}`);
    console.log(`Diskon Menjadi \t\t\t: ${integer.toLocaleString('id-ID')}`);
  } else {
    console.log(`Total Bayaran \t\t\t: ${totalBayaran1.toLocaleString('id-ID')}`);
  }
} else if (namaBarang === "celana") {
  const harga2 = 40000;
  const totalBayaran2 = jumlahBarang * harga2;

  if (jumlahBarang >= 7) {
    const diskon2 = totalBayaran2 * 0.91;
    const integer = Math.round(diskon2);
    console.log(`Total Bayaran \t\t\t: ${totalBayaran2.toLocaleString('id-ID')}`);
    console.log(`Diskon Menjadi \t\t\t: ${integer.toLocaleString('id-ID')}`);
  } else {
    console.log(`Total Bayaran \t\t\t: ${totalBayaran2.toLocaleString('id-ID')}`);
  }
} else {
  console.log("Mungkin Barang Tersebut Tidak Dijual Di Sini");
}