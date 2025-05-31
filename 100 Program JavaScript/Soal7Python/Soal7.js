console.log("Memilih Tim");

const team = ["Bandung", "Jakarta", "Cianjur"];
const kelompok = ["Team 1", "Team 2", "Team 3"];

const nama = prompt("Nama Mu Siapa \t\t\t: ");
console.log("\nDaftar Tim:");
team.forEach((x, i) => console.log(`${i + 1}. ${x}`));

const list1 = parseInt(prompt("Masukkan Nomor Tim Anda \t: "), 10);
console.log("\nDaftar Kelompok:");
kelompok.forEach((r, a) => console.log(`${a + 1}. ${r}`));

const list2 = parseInt(prompt("Masukkan Nomor Kelompok Anda \t: "), 10);

console.log(`\nNama \t: ${nama}`);

if (list1 >= 1) {
  if (list1 <= team.length) {
    console.log(team[list1 - 1]);

    if (list2 >= 1) {
      if (list2 <= kelompok.length) {
        console.log(kelompok[list2 - 1]);
      } else {
        console.log("Nomor Tidak Dapat DiKetahui!");
      }
    } else {
      console.log("Nomor Tidak Dapat DiKetahui!");
    }
  } else {
    console.log("Nomor Tidak Dapat DiKetahui!");
  }
} else {
  console.log("Nomor Tidak Dapat DiKetahui!");
}