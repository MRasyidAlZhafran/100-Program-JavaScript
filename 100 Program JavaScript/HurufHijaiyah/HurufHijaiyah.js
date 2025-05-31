const huruf = prompt("Masukkan Huruf (alif/ba/ta/tsa):").toLowerCase();
console.log(`Huruf yang dimasukkan: ${huruf}`);

let hijaiyah;

if (huruf === "alif") {
  hijaiyah = "ا";
} else if (huruf === "ba") {
  hijaiyah = "ب";
} else if (huruf === "ta") {
  hijaiyah = "ت";
} else if (huruf === "tsa") {
  hijaiyah = "ث";
} else {
  console.log("Mungkin Huruf Belum Dimasukkan Atau Inputan Salah!");
}

if (hijaiyah) {
  console.log(`${huruf} Adalah ${hijaiyah}`);
}