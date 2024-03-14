document.addEventListener("keydown", eventkey =>{
    if(eventkey.key == "Enter"){
        keres(searchbar.value.trim());
    }
})

var Input = document.getElementById("searchbar");


function keres (nev){
    let WarName = nev;
    cont.innerHTML = "";
    //Megkeresi a bekért adatok
    for (var i = 0; i < szavak.length; i++) {
        const element = szavak[i];
        var talaltNev = element["Neve"].toLowerCase();
        if (talaltNev == WarName.toLowerCase()) {
           kiir(element) 
        }
    }
    searchbar.value = WarName;
}
//
function kiir(adatok) {
    console.log(adatok);
    var Összerak = "";
    Összerak += `<p><b>${adatok["Neve"]}</b></p>`;
    Összerak += `<p>Ideje: ${adatok["Ideje"]}</p>`;
    Összerak += `<p>Hadviselő felek: ${adatok["Hadviselő felek"]}`;
    Összerak += `<p>Következményei: ${adatok["Következményei"]}`;
    document.getElementById("adatokKiir").innerHTML = Összerak;
}

let cont = document.getElementById("talalatok-cont");


let lehetségesHáborúk = [];
function talalatok() {
    cont.innerHTML = "";
    lehetségesHáborúk = [];
    for(i = 0; i < szavak.length; i++){
        let haboru = szavak[i].Neve;
        console.log(haboru)

        if (haboru.toLowerCase().includes(searchbar.value.toLowerCase()) && searchbar.value != "") {
            lehetségesHáborúk.push(haboru);
        }
    }
    lehetségesHáborúk.forEach(e => {
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