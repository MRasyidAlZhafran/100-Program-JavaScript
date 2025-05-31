const angka = parseFloat(prompt("Masukkan Nilainya: "));
const totalnilai = parseFloat(prompt("Masukkan Total Nilainya: "));

let persentase = (angka / totalnilai) * 100

console.log(`Nilainya: ${angka}`)
console.log(`Total Nilainya: ${totalnilai}`)
console.log(`Persentase: ${persentase.toFixed(2)}%`)