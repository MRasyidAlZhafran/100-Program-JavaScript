function kerucut() {
  const r = parseFloat(prompt("Masukkan Jari-Jari \t: "));
  console.log(`Jari-Jari: ${r}`);

  const t = parseFloat(prompt("Masukkan Tingginya \t: "));
  console.log(`Tinggi: ${t}`);

  const la = parseFloat(prompt("Masukkan Luas Alas \t: "));
  console.log(`Luas Alas: ${la}`);

  const ls = parseFloat(prompt("Masukkan Luas Selimut \t: "));
  console.log(`Luas Selimut: ${ls}`);

  const phi = 22 / 7;

  const luas = (la, ls) => la + ls;
  const volume = (r, t) => (1 / 3) * (phi * r * r * t);

  console.log(`Luas Kerucut Adalah \t: ${luas(la, ls).toLocaleString("id-ID")} cm²`);
  console.log(`Volume Kerucut Adalah \t: ${volume(r, t).toLocaleString("id-ID")} cm³`);
}

kerucut();