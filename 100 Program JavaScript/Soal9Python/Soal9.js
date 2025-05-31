console.log("Jika membeli HP, Laptop, atau Tablet dengan harga tertentu, maka bisa mendapatkan bonus barang secara acak.");

const gratisBarangTablet = ["Casing", "Power Bank", "Tempered Glass", "HeadPhone", "TWS"];
const gratisBarangHP = ["Tempered Glass", "Power Bank", "TWS", "Casing", "Stiker"];
const gratisBarangLaptop = ["Mouse", "Tas", "Mouse Pad"];
const listBarang = ["HP", "Laptop", "Tablet"];

console.log("\nDaftar Barang:");
listBarang.forEach((x, i) => console.log(`${i + 1}. ${x}`));

const barang = parseInt(prompt("Masukkan Nomor Barang \t: "), 10);

if (barang === 1) {
  console.log("Rentang harga HP: 1.000.000 - 12.000.000");
} else if (barang === 2) {
  console.log("Rentang harga Laptop: 4.000.000 - 20.000.000");
} else if (barang === 3) {
  console.log("Rentang harga Tablet: 3.000.000 - 12.000.000");
} else {
  console.log("Barang tidak ditemukan.");
}

const harga = parseInt(prompt("Masukkan Harga Nya \t: "), 10);

if (barang === 1) {
  if (harga >= 1000000) {
    if (harga <= 12000000) {
      console.log(`Barangnya \t\t\t: ${listBarang[0]}`);
      console.log(`Harga yang dipilih \t: ${harga.toLocaleString('id-ID')}`);
      if (harga >= 5000000) {
        const acakHP = gratisBarangHP[Math.floor(Math.random() * gratisBarangHP.length)];
        console.log(`Gratis \t\t\t\t: ${acakHP}`);
      }
    } else {
      console.log("Barang Tidak Ada");
    }
  } else {
    console.log("Barang Tidak Ada");
  }
}

if (barang === 2) {
  if (harga >= 4000000) {
    if (harga <= 20000000) {
      console.log(`Barangnya \t\t\t: ${listBarang[1]}`);
      console.log(`Harga yang dipilih \t: ${harga.toLocaleString('id-ID')}`);
      if (harga >= 7500000) {
        const acakLaptop = gratisBarangLaptop[Math.floor(Math.random() * gratisBarangLaptop.length)];
        console.log(`Gratis \t\t\t\t: ${acakLaptop}`);
      }
    } else {
      console.log("Barang Tidak Ada");
    }
  } else {
    console.log("Barang Tidak Ada");
  }
}

if (barang === 3) {
  if (harga >= 3000000) {
    if (harga <= 12000000) {
      console.log(`Barangnya \t\t\t: ${listBarang[2]}`);
      console.log(`Harga yang dipilih \t: ${harga.toLocaleString('id-ID')}`);
      if (harga >= 6000000) {
        const acakTablet = gratisBarangTablet[Math.floor(Math.random() * gratisBarangTablet.length)];
        console.log(`Gratis \t\t\t\t: ${acakTablet}`);
      }
    } else {
      console.log("Barang Tidak Ada");
    }
  } else {
    console.log("Barang Tidak Ada");
  }
}