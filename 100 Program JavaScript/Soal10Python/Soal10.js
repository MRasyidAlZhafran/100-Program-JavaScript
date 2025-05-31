const listTunai = [50000, 300000, 500000, 1000000];
const listAtm = ["Tarik Tunai", "Cek Saldo"];

const saldo = parseInt(prompt("Masukkan Saldo Anda \t\t: "), 10);

console.log("\nDaftar Layanan:");
listAtm.forEach((x, i) => console.log(`>${i + 1} ${x}`));

const pilihan = prompt("Pilih >1/>2 \t\t: ").trim();

if (pilihan === ">1") {
  console.log("\nPilihan Tarik Tunai:");
  listTunai.forEach((k, l) => console.log(`>${l + 1} ${k}`));

  const tarikTunai = prompt("Pilih >1/>2/... \t\t: ").trim();

  if (tarikTunai === ">1") {
    if (saldo >= 50000) {
      console.log(`Total Yang Kamu Tarik Adalah \t: ${listTunai[0]}`);
      console.log(`Sisa Saldo Anda \t\t: ${saldo - listTunai[0]}`);
    } else {
      console.log("Saldo Anda Kurang");
    }
  } else if (tarikTunai === ">2") {
    if (saldo >= 300000) {
      console.log(`Total Yang Kamu Tarik Adalah \t: ${listTunai[1]}`);
      console.log(`Sisa Saldo Anda \t\t: ${saldo - listTunai[1]}`);
    } else {
      console.log("Saldo Anda Kurang");
    }
  } else if (tarikTunai === ">3") {
    if (saldo >= 500000) {
      console.log(`Total Yang Kamu Tarik Adalah \t: ${listTunai[2]}`);
      console.log(`Sisa Saldo Anda \t\t: ${saldo - listTunai[2]}`);
    } else {
      console.log("Saldo Anda Kurang");
    }
  } else if (tarikTunai === ">4") {
    if (saldo >= 1000000) {
      console.log(`Total Yang Kamu Tarik Adalah \t: ${listTunai[3]}`);
      console.log(`Sisa Saldo Anda \t\t: ${saldo - listTunai[3]}`);
    } else {
      console.log("Saldo Anda Kurang");
    }
  } else {
    console.log("Kode Tidak Valid!");
  }
} else if (pilihan === ">2") {
  console.log(`Saldo Anda \t\t\t: ${saldo}`);
} else {
  console.log("Tidak Ada Dalam Pilihan");
}