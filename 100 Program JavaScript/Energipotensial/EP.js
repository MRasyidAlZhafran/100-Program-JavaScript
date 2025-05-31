console.log("g = 10 m/s²");

const m = parseFloat(prompt("Masukkan Massanya \t: "));
const h = parseFloat(prompt("Masukkan Tingginya \t: "));

const g = 10;

const ep = m * g * h;

if (ep >= 1000) {
  const ep1 = ep / 1000;
  console.log(`Jadi Hasilnya Adalah \t: ${ep} J`);
  console.log(`Dikonversikan Menjadi \t: ${ep1} kJ`);
} else {
  console.log(`Jadi Hasilnya Adalah \t: ${ep} J`);
}