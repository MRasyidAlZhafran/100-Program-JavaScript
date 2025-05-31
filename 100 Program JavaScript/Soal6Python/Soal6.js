const angkapertama = parseInt(prompt("Masukkan Angka Pertama: "), 10);
const angkakedua = parseInt(prompt("Masukkan Angka Kedua: "), 10);
const angkaketiga = parseInt(prompt("Masukkan Angka Ketiga: "), 10);

let pertambahan = angkapertama + angkakedua + angkaketiga
let ratarata = pertambahan/3

console.log(`Hasil Dari Pertambahan Ketiga Angka Tersebut Adalah \t: ${pertambahan}`)
console.log(`Rata - Ratanya Yaitu \t: ${ratarata.toFixed(2)}`)