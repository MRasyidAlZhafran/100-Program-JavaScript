function kilokemil(km) {
  return mil = km * 0.621371
}

km1 = parseFloat(prompt("Masukkan Jarak dalam Kilometer : "))
milimeter = kilokemil(km1).toFixed(2);
console.log(`${km1} Km dikonversikan menjadi ${milimeter} Mil`)