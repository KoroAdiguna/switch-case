const siswa = [
  { nama: "Andi", nilai: 77 },
  { nama: "Budi", nilai: 88 },
  { nama: "Wildan", nilai: 95 },
  { nama: "Jalu", nilai: 67 },
  { nama: "Rena", nilai: 73 },
  { nama: "Adi", nilai: 90 }
];

function cekNilai(nilai) {
  switch(true) {
    case nilai >= 90: return "A";
    case nilai >= 80: return "B";
    case nilai >= 70: return "C";
    case nilai >= 60: return "D";
    default: return "E";
  }
}

console.log("Daftar Nilai Siswa:");
siswa.forEach(s => {
  console.log(`
  Nama: ${s.nama}
  Nilai: ${s.nilai} (${cekNilai(s.nilai)})
  `);
});
