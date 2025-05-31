const namabarang = prompt("Masukkan Nama Barang: ").trim().toLowerCase();
const jumlahbarang = parseInt(prompt("Masukkan Jumlah Barang Yang Ingin Dibeli: "), 10);

let hargaBarang;
let ketersediaan = true;

if (namabarang === "kertas") {
    hargaBarang = 1000;
    if (jumlahbarang >= 30) ketersediaan = false;
} else if (namabarang === "buku") {
    hargaBarang = 10000;
    if (jumlahbarang >= 40) ketersediaan = false;
} else if (namabarang === "pensil") {
    hargaBarang = 2000;
    if (jumlahbarang >= 50) ketersediaan = false;
} else if (namabarang === "penghapus") {
    hargaBarang = 2500;
    if (jumlahbarang >= 40) ketersediaan = false;
} else {
    console.log("Barang tidak ditemukan!");
    hargaBarang = 0;
    ketersediaan = false;
}

const totalHarga = jumlahbarang * hargaBarang;

console.log(`Nama Barang: ${namabarang}`);
console.log(`Harga Barang: ${hargaBarang.toLocaleString("id-ID")}`);
console.log(`Jumlah Barang: ${jumlahbarang.toLocaleString("id-ID")}`);
console.log(`Total Harga: ${totalHarga.toLocaleString("id-ID")}`);
console.log(`Ketersediaan: ${ketersediaan ? "Tersedia" : "Stok Habis"}`);