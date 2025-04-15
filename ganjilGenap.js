function cekGanjilGenap(platNomor) {
  const angkaPlat = platNomor.replace(/\D/g, ''); 
  
  const angkaTerakhir = angkaPlat.slice(-1);
  
  const angka = parseInt(angkaTerakhir);

  switch(angka % 2) {
    case 0:
      return "Genap - Boleh lewat hari genap";
    case 1:
      return "Ganjil - Boleh lewat hari ganjil";
    default:
      return "Plat nomor tidak valid";
  }
}

var plat1 = "B 1233 CDR";
var plat2 = "AB 5678 GFX";
var plat3 = "F 5434 FRD";
var plat4 = "H 2135 GHJ";

console.log(`Plat ${plat1}: ${cekGanjilGenap(plat1)}`);
console.log(`Plat ${plat2}: ${cekGanjilGenap(plat2)}`);
console.log(`Plat ${plat1}: ${cekGanjilGenap(plat3)}`);
console.log(`Plat ${plat2}: ${cekGanjilGenap(plat4)}`);