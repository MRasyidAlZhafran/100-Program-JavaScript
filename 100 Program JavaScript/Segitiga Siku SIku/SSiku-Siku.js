function segitigaSikuSiku() {
  const sa = parseInt(prompt("Masukkan Sisi a : "));
  console.log(`Sisi a: ${sa}`);

  const sb = parseInt(prompt("Masukkan Sisi b : "));
  console.log(`Sisi b: ${sb}`);

  const sc = parseInt(prompt("Masukkan Sisi c : "));
  console.log(`Sisi c: ${sc}`);

  const alas = parseInt(prompt("Masukkan Alasnya : "));
  console.log(`Alas: ${alas}`);

  const tinggi = parseInt(prompt("Masukkan Tingginya : "));
  console.log(`Tinggi: ${tinggi}`);

  const keliling = (sa, sb, sc) => sa + sb + sc;
  const luas = (alas, tinggi) => 0.5 * alas * tinggi;

  console.log(`Luas Segitiga Siku - Siku Adalah \t: ${luas(alas, tinggi)}`);
  console.log(`Keliling Segitiga Siku - Siku Adalah \t: ${keliling(sa, sb, sc)}`);
}

segitigaSikuSiku();