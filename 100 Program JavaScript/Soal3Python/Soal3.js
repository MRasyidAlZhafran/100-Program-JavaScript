let jumlahsepatu = parseInt(prompt("Masukkan Jumlah Sepatu : "), 10);
let hargasepatu = 70000
const hasil = jumlahsepatu * hargasepatu

console.log("*".repeat(30));
console.log("\tPROGRAM JAVASCRIPT Jual Sepatu");
console.log(`\tJumlah Sepatu : ${jumlahsepatu}`);
console.log(`\tHarga : ${hargasepatu.toLocaleString('id-ID', {maximumFractionDigits: 2})}`);
console.log(`\tTotal : ${hasil.toLocaleString('id-ID', {maximumFractionDigits: 2, minimumFractionDigits: 2})}`);
console.log("*".repeat(30));