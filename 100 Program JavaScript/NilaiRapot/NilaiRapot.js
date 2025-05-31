const isiNama = document.getElementById('isi-nama')
const isiNilai = document.getElementById('isi-nilai')
const btnnilai = document.getElementById('btn-nilai')
const nama = document.getElementById('nama')
const nilai = document.getElementById('nilai')
const grade = document.getElementById('grade')

function tentukanTingkat(nilai) {
    let tingkat;

    if (nilai > 100) {
        tingkat = "Error"
    } else if (nilai >= 90 && nilai < 101) {
        tingkat = "A";
    } else if (nilai >= 75 && nilai < 90) {
        tingkat = "B";
    } else if (nilai >= 65 && nilai < 75) {
        tingkat = "C";
    } else if (nilai >= 55 && nilai < 65) {
        tingkat = "D";
    } else {
        tingkat = "E";
    }

    return tingkat;
}

btnnilai.addEventListener('click', function () {
    nama.textContent = isiNama.value
    nilai.textContent = isiNilai.value
    grade.textContent = tentukanTingkat(isiNilai.value)
})

// Contoh penggunaan
// let nilaiSiswa = 85;
// console.log(`Nilai: ${nilaiSiswa}, Tingkat: ${tentukanTingkat(nilaiSiswa)}`);