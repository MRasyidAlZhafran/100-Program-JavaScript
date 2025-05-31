const angka = parseFloat(prompt("Masukkan basisnya\t: "));
const eksponen = parseInt(prompt("Masukkan eksponennya\t: "));

const hasil = angka ** eksponen;

console.log(`Hasilnya ${angka} pangkat ${eksponen} yaitu ${hasil.toLocaleString("id-ID")}`);
