const bilangan = parseInt(prompt("Masukkan bilangan: "));

let faktorial = 1;

if (bilangan < 0) {
  console.log("Maaf, faktorial tidak dapat dihitung untuk bilangan negatif");
} else if (bilangan === 0) {
  console.log("Faktorial dari 0 adalah 1");
} else {
  for (let i = 1; i <= bilangan; i++) {
    faktorial *= i;
  }
  console.log(`Faktorial dari ${bilangan} adalah ${faktorial}`);
}