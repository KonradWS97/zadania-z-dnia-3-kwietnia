// let a
// const poleKwadratu= a => console.log(a*a)// wyrazenie funkcyjne
// poleKwadratu(5)
// function poleKwadratu2(a)
// {
//     console.log(a*a)
// }
// poleKwadratu2(40)
//
//
// // <<<<<objekt>>>>>
// const obiekt = {
//     ... jakies wlasiciwosci np.
//     color: 'red',
//     }
//Stworz obiekt o nazwie ofertaSamochodu, z następującymi właściwościami: marka : "Kia", model :
// "Carens", cena : 60000 i metodą o nazwie kosztNa100km(), która zwraca wartość 55zł.
//  let pb95 =4
// const ofertaSamochodu={
//     marka : "Kia",
//     model : "Carens",
//     cena : 60000 ,
//     spalanie: 8,
//     rokProdukcji : 2010,
//     wiekSamochodu: function () {
//         let data=new Date()
//         let dzisiejszaRok= data.getFullYear()
//         // let lataSamochodu
//         return dzisiejszaRok- this.rokProdukcji
//     },
//     kosztNa100km : function()
//     {
//         return this.spalanie*pb95
//     }

// }
// ofertaSamochodu.kosztNa100km()
// console.log(  ofertaSamochodu.kosztNa100km())
// console.log(  ofertaSamochodu.wiekSamochodu())
//Jak wyżej, zdefiniuj dodatkowo właściwość spalanie przypisz jej wartość 8 (8 litrów/100km). 
// "Przed obiektem" zdefiniuj zmienną pb95 przypisz jej wartość 4 (4 zł./litr). 
// Zmodyfikuj metodę koszt100km() tak by zwracała koszt, przy założenej cenie paliwa i spalaniu danego samochodu.
// ---------------------------------------------------------------------------------------------------------
// Dodatkwoo utwórz wlasiciwosc "rokProd" i przypisz 2010 a nastepnie utworz metodę wiekSamochodu(),
//  tak by zwracała odpowiednio 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat .... 
//  Sprawdzając date od dnia dzisiejszego data.getFullYear()
function Oferta (marka, model, cena, spalanie, rocznik) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.rocznik = rocznik;
    this.koszt100km = function() {
        let koszt = this.spalanie * pb95;
        return koszt;
    };
    this.wiekSamochodu = function() {
        let data=new Date()
        let wiek=Number(data.getFullYear())-this.rocznik;
        if(wiek==1) { wiek=wiek+' rok'; }
        else if (wiek>1 && wiek <5) { wiek=wiek+' lata'; }
        else { wiek=wiek+' lat'; }
        return wiek;
    }
}
const Komis = {
    Oferta1: new Oferta("Kia","Carens",60000,8,2016),
    Oferta2: new Oferta("Opel", "Astra", 70000, 10, 1998),
    Oferta3: new Oferta ("Renout", "clio", 50000, 6, 2008),
}
console.log(Komis)
console.log(Object.values(Komis.Oferta1))
console.log(Komis.marka)
console.log(Object.keys(Komis))
console.log(Komis["Oferta1"])
for(n of Object.keys(Komis))
{
    // console.log(n)
    // console.log(Komis[n])
    console.log(Komis[n].marka)
    let newElement = document.createElement('li')
    let tekst = document.createTextNode(pole)
    let nowaWartosc =document.getElementById('nowa')
    let markiSamochodu=document.getElementById('markiS')
    markiSamochodu.innerHTML=Komis[n].marka
}