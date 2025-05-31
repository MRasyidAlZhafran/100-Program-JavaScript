let huruf = prompt("Masukkan sebuah huruf: ").toUpperCase();

if (/^[A-Z]$/.test(huruf)) {
  if (["A", "E", "I", "O", "U"].includes(huruf)) {
    console.log(`${huruf} adalah huruf vokal`);
  } else {
    console.log(`${huruf} adalah huruf konsonan`);
  }
} else {
  console.log(`${huruf} bukan berupa huruf`);
}