console.log("Idgham Ada Beberapa Jenis");
console.log("1. Idgham Bighunnah");
console.log("2. Idgham Bilaghunnah");
console.log("3. Idgham Mimi");

const idgham = parseInt(prompt("Silahkan Masukkan Jenis Idgham (1/2/3):"));
console.log(`Jenis Idgham yang dipilih: ${idgham}`);

if (idgham === 1) {
  console.log(`
    1. Idgham Bighunnah
    Idgham Bighunnah adalah sebuah aturan dalam tajwid yang berarti 
    menyatukan nun mati atau tanwin dengan huruf yang mengikuti 
    dan membacanya dengan suara yang mendengung. 
    Terdapat empat huruf yang termasuk dalam Idgham Bighunnah, 
    yaitu mim (م), nun (ن), wau (و), dan ya (ي).
    Contohnya:
    "اَبِيْ لَهَبٍ وَّتَبَّ"
    `);
} else if (idgham === 2) {
  console.log(`
    2. Idgham Bilaghunnah
    Idgham Bilaghunnah yaitu jika nun mati atau tanwin bertemu dengan 
    salah satu huruf Idgham Bilaghunnah, maka dibaca dengan cara 
    menggabungkannya tanpa dengungan.
    Terdapat dua huruf dalam Idgham Bilaghunnah, yaitu lam (ل) dan ra (ر).
    Contohnya:
    "فَوَيْلٌ لِّلْمُصَلِّيْنَ"
    `);
} else if (idgham === 3) {
  console.log(`
    3. Idgham Mimi
    Dalam Idgham Mimi, mim mati dileburkan dengan huruf mim berharakat 
    di depannya dan dibacanya dengan dengung selama 3 harakat. 
    Idgham Mimi berlaku ketika mim mati (مْ) bertemu dengan huruf mim 
    berharakat (مَ – مِ – مُ).
    Contohnya:
    "أَطْعَمَهُمْ مِنْ"
    `);
} else {
  console.log("Maaf, pilihan tidak tersedia!");
}