const angka = parseInt(prompt("Masukkan angka: "));
console.log(`Angka yang dimasukkan: ${angka}`);

if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}