const kata = prompt("Masukkan Kalimat : ");
const fre = {};

for (let x of kata) {
  if (fre[x]) {
    fre[x]++;
  } else {
    fre[x] = 1;
  }
}

console.log("Frekuensi karakternya adalah \t:", fre);