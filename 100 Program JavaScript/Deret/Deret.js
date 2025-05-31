const deret = parseInt(prompt("Masukkan Nilai Deret: "));

let hasil = "";
for (let x = 1; x <= deret; x++) {
  hasil += (x * x) + " ";
}

console.log(hasil.trim());