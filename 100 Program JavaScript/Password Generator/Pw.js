const kataSandi = 13;
const angkaKata = "abcdefghijklmnopqrstuvwxyz123456789";
let kataSandi1 = "";

for (let a = 0; a < kataSandi; a++) {
  kataSandi1 += angkaKata.charAt(Math.floor(Math.random() * angkaKata.length));
}

console.log(`Kata Sandi : ${kataSandi1}`);