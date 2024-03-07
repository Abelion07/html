document.addEventListener("keydown", eventkey =>{
    if(eventkey.key == "Enter"){
        keres(searchbar.value.trim());
    }
})

var Input = document.getElementById("searchbar");


function keres (nev){
    let Cityname = nev;
    cont.innerHTML = "";
    //Megkeresi a bekért adatok
    for (var i = 0; i < szavak.length; i++) {
        const element = szavak[i];
        var talaltNev = element["Név"].toLowerCase();
        if (talaltNev == Cityname.toLowerCase()) {
           kiir(element) 
        }
    }
    searchbar.value = Cityname;
}
//
function kiir(adatok) {
    console.log(adatok);
    var Összerak = "";
    Összerak += `<p><b>${adatok["Név"]}</b></p>`;
    Összerak += `<p>Vármegye: ${adatok["Megye"]}</p>`;
    Összerak += `<p>Népesség: ${adatok["Népesség"]} fő</p>`;
    Összerak += `<p>Terület: ${adatok["Terület"]} km<sup>2</sup></p>`;
    Összerak += `<p>Irányítószám: ${adatok["Irányítószám"]}</p>`;
    Összerak += `<p>Mióta város: ${adatok["Mióta város"]}</p>`;
    Összerak += `<p>Népsűrűség: ${adatok["Népsűrűség"]} fő/km<sup>2</sup></p>`;
    document.getElementById("adatokKiir").innerHTML = Összerak;
}

let cont = document.getElementById("talalatok-cont");


let lehetsegesVarosok = [];
function talalatok() {
    cont.innerHTML = "";
    lehetsegesVarosok = [];
    for(i = 0; i < szavak.length; i++){
        let varos = szavak[i].Név;
        if (varos.toLowerCase().includes(searchbar.value.toLowerCase()) && searchbar.value != "") {
            lehetsegesVarosok.push(varos);
        }
    }
    lehetsegesVarosok.forEach(e => {
        talalatKeszito(e)
    })
}
    
function talalatKeszito(talalat) {
    let node = document.createElement("div");
    node.innerText = talalat;
    node.classList.toggle("talalat");
    node.onclick = function(){ keres(talalat); };
    node.style.cursor = "pointer";

    
    cont.appendChild(node);
}
            
talalatok();

let nav = document.getElementById("navbar");
function on(){
    nav.style.width = "300px" 
}

function off(){
    nav.style.width = "0" 
}

function Megjegyzések(){
    alert("A weboldal 2006-os adatokat használ. "+
    "Az információk nem korszerűek!");   
}