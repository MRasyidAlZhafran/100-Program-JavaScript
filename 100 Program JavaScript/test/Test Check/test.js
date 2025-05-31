const counter = document.querySelector('#counter')
const jamText = document.getElementById('jam');
const menitText = document.getElementById('menit');
const detikText = document.getElementById('detik');
const btnStop = document.getElementById('stop');
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');

let jam = Number(jamText.textContent)
let menit = Number(menitText.textContent)
let detik = Number(detikText.textContent)


const increment = () => {
  // count++
  // counter.textContent = count
  detik++
  if (detik == 60) {
    menit++
    detik = 0
  }
  if (menit == 60) {
    jam++
    menit = 0
  }
  detikText.textContent = detik < 10 ?'0'+detik:detik
  menitText.textContent = menit < 10 ?'0'+menit:menit
  jamText.textContent = jam < 10 ?'0'+jam:jam
}

let timer

btnStart.addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(increment, 15);
  }
});

btnStop.addEventListener('click', () => {
  clearInterval(timer)
  timer = null;
})

btnReset.addEventListener('click', () => {
  detik = 0;
  menit = 0;
  jam = 0;
  detikText.textContent = '00';
  menitText.textContent = '00';
  jamText.textContent = '00';
})
