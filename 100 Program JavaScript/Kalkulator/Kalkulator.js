console.log("Pilih Operasi:");
console.log("1 - Penjumlahan");
console.log("2 - Pengurangan");
console.log("3 - Perkalian");
console.log("4 - Pembagian");
console.log("5 - Modulus");

const operator = parseInt(prompt("Pilih Operasi: "));
console.log(`Operasi yang dipilih: ${operator}`);

const operand1 = parseFloat(prompt("Masukkan Angka Pertama : "));
console.log(`Angka Pertama: ${operand1}`);

const operand2 = parseFloat(prompt("Masukkan Angka Kedua : "));
console.log(`Angka Kedua: ${operand2}`);

if (operator === 1) {
  console.log(`Hasil dari ${operand1} + ${operand2} = ${operand1 + operand2}`);
} else if (operator === 2) {
  console.log(`Hasil dari ${operand1} - ${operand2} = ${operand1 - operand2}`);
} else if (operator === 3) {
  console.log(`Hasil dari ${operand1} * ${operand2} = ${operand1 * operand2}`);
} else if (operator === 4) {
  console.log(`Hasil dari ${operand1} / ${operand2} = ${operand1 / operand2}`);
} else if (operator === 5) {
  console.log(`Hasil dari ${operand1} % ${operand2} = ${operand1 % operand2}`);
} else {
  console.log("Maaf, Operasi Tersebut Tidak Tersedia :)");
}