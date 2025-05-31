function lirik() {
  const lirik = [
    ["Secret I have held in my heart", 100],
    ["Are Harder To Hide Than I Thought", 100],
    ["Maybe I Just Wanna Be Yours", 100],
    ["I Wanna Be Yours", 100],
    ["I Wanna Be Yours", 100],
    ["Wanna Be Yours", 100],
    ["Wanna Be Yours", 100],
    ["Wanna Be Yours", 100],
  ];

  const delay = [400, 400, 500, 500, 1800, 2100, 2200, 2000];

  console.log("\n+=Wanna Be Yours=+");

  let i = 0;

  function tampilkanLirik() {
    if (i < lirik.length) {
      let teks = lirik[i][0];
      let delayKata = lirik[i][1];
      let index = 0;

      function tampilkanKata() {
        if (index < teks.length) {
          document.body.innerHTML += teks[index]; // Menampilkan teks di halaman
          index++;
          setTimeout(tampilkanKata, delayKata);
        } else {
          document.body.innerHTML += "<br>"; // Pindah ke baris berikutnya
          i++;
          setTimeout(tampilkanLirik, delay[i]);
        }
      }

      tampilkanKata();
    }
  }

  setTimeout(tampilkanLirik, 2000);
}

lirik();