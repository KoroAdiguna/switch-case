let hargaawal = 500000
console.log("harga awal = " + hargaawal)

let diskon = 20
let potonganharga = hargaawal * diskon / 100
console.log("potongan harga = " + potonganharga)

let hargasetelahdiskon = hargaawal - potonganharga
console.log("harga setelah diskon = " + hargasetelahdiskon)

diskon = 50
let potongandipotong = hargasetelahdiskon * diskon / 100
console.log("diskon lagi = " + potongandipotong)