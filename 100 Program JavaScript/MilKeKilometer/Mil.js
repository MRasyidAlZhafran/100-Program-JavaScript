function milkekilo(mil) {
  return km = mil * 1.60934
}

mil1 = parseFloat(prompt("Masukkan Jarak dalam Mil : "))
kilometer = milkekilo(mil1).toFixed(2);
console.log(`${mil1} mil dikonversikan menjadi ${kilometer} km`)