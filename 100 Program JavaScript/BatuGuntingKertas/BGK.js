const opsi = ["batu", "gunting", "kertas"];
const pilih = prompt("Pilih Batu/Gunting/Kertas \t: ").toLowerCase();

console.log("Pilihan Kamu \t\t\t:", pilih);

const musuh = opsi[Math.floor(Math.random() * opsi.length)];
console.log("Pilihan Musuh \t\t\t:", musuh);

if (pilih === musuh) {
    console.log("Seri/Draw!");
} else if (
    (pilih === "batu" && musuh === "gunting") ||
    (pilih === "kertas" && musuh === "batu") ||
    (pilih === "gunting" && musuh === "kertas")
) {
    console.log("Kamu Menang!");
} else {
    console.log("Kamu Kalah!");
}