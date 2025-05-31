function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const angkapertama = parseInt(prompt("Tulis angka pertama: "));
const angkakedua = parseInt(prompt("Tulis angka kedua: "));

const fpb = gcd(angkapertama, angkakedua);
const kpk = (angkapertama * angkakedua) / fpb;

console.log(`FPB dari ${angkapertama} dan ${angkakedua} = ${fpb}`);
console.log(`KPK dari ${angkapertama} dan ${angkakedua} = ${kpk}`);