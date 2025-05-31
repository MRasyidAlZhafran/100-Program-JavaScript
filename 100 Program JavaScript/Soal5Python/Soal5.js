const angkapertama = parseInt(prompt("Masukkan Angka Pertama: "), 10);
const angkakedua = parseInt(prompt("Masukkan Angka Kedua: "), 10);
const angkaketiga = parseInt(prompt("Masukkan Angka Ketiga: "), 10);

let angka1 = 87
let angka2 = 50
let angka3 = 32

if (angkapertama === angka1) {
    console.log("Jawaban Anda Benar!")
    console.log(`Angkamu : ${angkapertama}`)
    console.log(`Angka Pertama : ${angka1}`)
} else {
    console.log(`Angkamu : ${angkapertama}`)
    console.log("Tebakan Anda Salah!")
    if (angkapertama >= angka1) {
        console.log("Jawaban Terlalu Besar Dari Angka Pertama!")
    } else {
        console.log("Jawaban Terlalu Kecil Dari Angka Pertama!")
    }
}
console.log("")
if (angkakedua === angka2) {
    console.log("Jawaban Anda Benar!")
    console.log(`Angkamu : ${angkakedua}`)
    console.log(`Angka Kedua : ${angka2}`)
} else {
    console.log(`Angkamu : ${angkakedua}`)
    console.log("Tebakan Anda Salah!")
    if (angkakedua >= angka2) {
        console.log("Jawaban Terlalu Besar Dari Angka Kedua!")
    } else {
        console.log("Jawaban Terlalu Kecil Dari Angka Kedua!")
    }
}
console.log("")
if (angkaketiga === angka3) {
    console.log("Jawaban Anda Benar!")
    console.log(`Angkamu : ${angkaketiga}`)
    console.log(`Angka Ketiga : ${angka3}`)
} else {
    console.log(`Angkamu : ${angkaketiga}`)
    console.log("Tebakan Anda Salah!")
    if (angkaketiga >= angka3) {
        console.log("Jawaban Terlalu Besar Dari Angka Ketiga!")
    } else {
        console.log("Jawaban Terlalu Kecil Dari Angka Ketiga!")
    }
}