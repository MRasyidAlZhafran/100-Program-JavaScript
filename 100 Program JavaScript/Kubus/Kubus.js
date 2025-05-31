function kubus() {
  const r = parseInt(prompt("Masukkan Rusuknya \t: "));
  console.log(`Rusuk Kubus: ${r}`);

  const luas = (r) => 6 * r * r;
  const volume = (r) => r * r * r;

  console.log(`Luas Kubus Adalah \t: ${luas(r).toLocaleString("id-ID")}`);
  console.log(`Volume Kubus Adalah \t: ${volume(r).toLocaleString("id-ID")}`);
}

kubus();