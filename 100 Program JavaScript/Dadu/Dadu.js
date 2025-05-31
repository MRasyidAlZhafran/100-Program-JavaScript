const dadu = document.getElementById("dadu");
const tombol = document.getElementById("kocok");
const hadiahElem = document.getElementById("hadiah");

const hadiah = {
  1: "🍫 Kamu dapat Cokelat!",
  2: "🛣️ Kamu dapat Kupon Diskon Tarif Tol!",
  3: "🎁 Kamu dapat Hadiah Spesial!",
  4: "💎 Kamu dapat Top Up Gratis!",
  5: "🪙   Kamu dapat Koin Bonus!",
  6: "🏆 Selamat! Kamu dapat Hadiah Besar!"
};

let lastAngka = 0;

function generateRandomAngka() {
  let newAngka;
  do {
    newAngka = Math.floor(Math.random() * 6) + 1;
  } while (newAngka === lastAngka); 
  lastAngka = newAngka;
  return newAngka;
}

function kocokDadu() {
  dadu.style.animation = "none";
  hadiahElem.innerHTML = "";

  let counter = 0;
  let delay = 0.5;

  function animate() {
    let randomAngka = generateRandomAngka();
    dadu.innerHTML = `🎲 ${randomAngka}`;
    dadu.style.transform = "scale(1.2)";
    setTimeout(() => dadu.style.transform = "scale(1)", 100);

    counter++;

    if (counter < 50) {
      delay += 5;
      setTimeout(animate, delay);
    } else {
      let hasilAkhir = generateRandomAngka();
      dadu.innerHTML = `🎲 ${hasilAkhir}`;
      dadu.style.animation = "spin 1s ease-out";

      hadiahElem.innerHTML = hadiah[hasilAkhir];

      if (hasilAkhir === 6) {
        dadu.classList.add("jackpot");
      } else {
        dadu.classList.remove("jackpot");
      }
    }
  }

  animate();
}

tombol.addEventListener("click", kocokDadu);
