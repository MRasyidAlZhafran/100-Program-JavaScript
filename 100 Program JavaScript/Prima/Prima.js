const x = parseInt(prompt("Masukkan Satu Angka : "));

let prima = true;

if (x === 0 || x === 1) {
  prima = false;
} else {
  for (let i = 2; i < x / 2; i++) {
    if (x % i === 0) {
      prima = false;
      break;
    }
  }
}

if (prima) {
  console.log(`${x} adalah angka prima`);
} else {
  console.log(`${x} bukan angka prima`);
}