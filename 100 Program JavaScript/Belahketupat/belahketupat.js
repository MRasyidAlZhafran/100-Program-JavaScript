const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const btnluas = document.getElementById('btn-d')
const luas = document.getElementById('luas')
const sisi = document.getElementById('s')
const btnkeliling = document.getElementById('btn-s')
const keliling = document.getElementById('keliling')

function hitungluas(d1, d2) {
  return 0.5 * d1 * d2
}

btnluas.addEventListener ('click', function(){
  luas.textContent = hitungluas(d1.value, d2.value)

  luas.style.textDecoration = "underline 1px";
})

btnkeliling.addEventListener ('click', function(){
  keliling.textContent = 4 * sisi.value
  
  keliling.style.textDecoration = "underline 1px";
})