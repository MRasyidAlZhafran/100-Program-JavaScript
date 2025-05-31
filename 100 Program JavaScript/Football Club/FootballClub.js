const liga = prompt("Masukkan Liga Sepak Bola (Inggris/Spanyol/Italia):").toLowerCase();

const clubInggris = ["Manchester United", "Liverpool", "Arsenal", "Manchester City", "Chelsea"];
const clubSpanyol = ["Real Madrid", "Barcelona", "Atletico Madrid", "Bilbao", "Valencia"];
const clubItalia = ["Juventus", "Inter Milan", "AC Milan", "Genoa", "Torino"];

console.log(`Liga yang dipilih: ${liga}`);

if (liga === "inggris") {
  console.log("Club Inggris:");
  console.log(clubInggris.join(", "));
  console.log("Club-club ini pernah menguasai liga tersebut pada masanya.");
} else if (liga === "spanyol") {
  console.log("Club Spanyol:");
  console.log(clubSpanyol.join(", "));
  console.log("Real Madrid dan Barcelona adalah pemilik piala terbanyak.");
} else if (liga === "italia") {
  console.log("Club Italia:");
  console.log(clubItalia.join(", "));
  console.log("Beberapa club ini memiliki sejarah panjang di Serie A.");
} else {
  console.log("Mungkin inputan salah, coba pilih: (Inggris/Spanyol/Italia)");
}