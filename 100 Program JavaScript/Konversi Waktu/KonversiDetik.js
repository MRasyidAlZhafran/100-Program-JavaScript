console.log("Konversi Detik ke Jam, Menit, Detik");

let detik1 = parseInt(prompt("Masukkan Detiknya :"));
let detik = detik1 % 60;
let menit = Math.floor(detik1 / 60);
let jam = Math.floor(detik1 / 3600);

console.log(`${detik1} Dikonversikan Menjadi Jam \t\t: ${jam} Jam`);
console.log(`${detik1} Dikonversikan Menjadi Menit \t: ${menit} Menit`);