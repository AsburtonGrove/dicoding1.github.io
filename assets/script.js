const orang = prompt("silahkan masukkan nama anda!")
const nama = alert("Selamat datang " + orang)

let navbar1 = document.querySelector("#about")
let artikel1 = document.querySelector("article.left-content")
let paragraf = document.querySelector("p strong")
navbar1.addEventListener("click", function() {
    let warna = artikel1.style.backgroundColor;
    artikel1.style.backgroundColor = warna === 'white' ? '#007bff' : 'white';

    if ( artikel1.style.backgroundColor === 'white'){
        paragraf.style.color = '#007bff'
    }else {
        paragraf.style.color = 'white'
    }
});


let navbar2 = document.querySelector("#article")
let artikel2 = document.querySelector("article.article-2")

navbar2.addEventListener("click", function(event) {
    let warna = artikel2.style.backgroundColor;
    artikel2.style.backgroundColor = warna === 'white' ? '#007bff' : 'white';
})

let navbar3 = document.querySelector("#contact")
let aside = document.querySelector("aside.aside")
let paragrafAside = document.querySelector("p strong#nama")
navbar3.addEventListener("click", function(event) {
    let warna = aside.style.backgroundColor;
    aside.style.backgroundColor = warna === 'white' ? '#007bff' : 'white';

    if (aside.style.backgroundColor === 'white'){
        paragrafAside.style.color = '#007bff'
    }else {
        paragrafAside.style.color = 'white'
    }
})