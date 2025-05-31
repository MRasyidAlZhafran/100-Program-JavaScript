const sisi = prompt("Masukkan Sisinya (a/b/c) : ").toLowerCase();

if (sisi === "a") {
  const b = parseFloat(prompt("Masukkan Sisi b : "));
  const c = parseFloat(prompt("Masukkan Hipotenusa : "));

  const a = Math.sqrt(c ** 2 - b ** 2);
  console.log(`Jadi Sisi a Adalah : ${a}`);
} else if (sisi === "b") {
  const a = parseFloat(prompt("Masukkan Sisi a : "));
  const c = parseFloat(prompt("Masukkan Hipotenusa : "));

  const b = Math.sqrt(c ** 2 - a ** 2);
  console.log(`Jadi Sisi b Adalah : ${b}`);
} else if (sisi === "c") {
  const a = parseFloat(prompt("Masukkan Sisi a : "));
  const b = parseFloat(prompt("Masukkan Sisi b : "));

  const c = Math.sqrt(a ** 2 + b ** 2);
  console.log(`Jadi Hipotenusanya Adalah \t: ${c}`);
} else {
  console.log("Inputan Salah!");
}