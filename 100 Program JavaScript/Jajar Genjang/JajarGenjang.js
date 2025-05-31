function jajargenjang() {
  const a = parseInt(prompt("Masukkan Alasnya : "));
  console.log(`Alas: ${a}`);

  const t = parseInt(prompt("Masukkan Tingginya : "));
  console.log(`Tinggi: ${t}`);

  const sa = parseInt(prompt("Masukkan Sisi 1 : "));
  console.log(`Sisi 1: ${sa}`);

  const sb = parseInt(prompt("Masukkan Sisi 2 : "));
  console.log(`Sisi 2: ${sb}`);

  const luas = (a, t) => a * t;
  const keliling = (sa, sb) => 2 * (sa + sb);

  console.log(`Luasnya Adalah \t: ${luas(a, t)} cm²`);
  console.log(`Kelilingnya Adalah \t: ${keliling(sa, sb)} cm`);
}

jajargenjang();