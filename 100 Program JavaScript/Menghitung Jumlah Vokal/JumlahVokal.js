const kalimat = prompt("Masukkan kalimat: ");
const vokal = "aeiouAEIOU";

const jumlahVokal = [...kalimat].reduce((count, char) => vokal.includes(char) ? count + 1 : count, 0);

console.log("Kalimat:", kalimat);
console.log("Jumlah huruf vokal:", jumlahVokal);