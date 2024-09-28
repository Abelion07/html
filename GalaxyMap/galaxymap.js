// Created by Abelion07, TLevi
const bolygólista = document.querySelector('.bolygolista')

let adat;
    
for (let j = 0; j < planets.length; j++) {
    adat = document.createElement("div");
    adat.innerHTML = planets[j].Name;
    adat.classList.add("adatok")

    bolygólista.appendChild(adat);

    adat.addEventListener("click", () => {
        kiir(planets[j])
    });
}

let input = document.getElementById("searchbox");

input.addEventListener("keyup", () => {
    let searchValue = input.value.toLowerCase(); // Kisbetűssé alakítás az összehasonlításhoz

    let allPlanets = document.querySelectorAll('.adatok'); // Összes bolygó div elem lekérése

    allPlanets.forEach((planetDiv, index) => {
        let planetName = planets[index].Name.toLowerCase(); // Bolygónév kisbetűssé alakítása
        if (planetName.includes(searchValue)) {
            planetDiv.style.display = ""; // Megjelenítjük, ha egyezik
        } else {
            planetDiv.style.display = "none"; // Elrejtjük, ha nem egyezik
        }
    });
});

const Info = document.querySelector('.adatokKiir');
Info.classList.add("Info")

function kiir(adatok) {
    while (Info.hasChildNodes()) {
        Info.removeChild(Info.firstChild)
    }

    let closebtn = document.createElement("p");
    closebtn.innerHTML = "&times;"
    closebtn.classList.add("closebtn");
    closebtn.onclick = close;
    Info.appendChild(closebtn);


    Info.classList.add("adatokKiirVisible");


    let keys = ["Name", "Region", "Sector", "System", "Inhabitants", "Capital_City", "Grid_Coordinates"];
    let szókulcs = ["Név", "Régió", "Szektor", "Rendszer", "Faj", "Főváros", "Koordináták"];

    for (let i = 0; i < keys.length; i++) {
        let adatkiir = document.createElement("div");
        adatkiir.innerHTML = `<p><b>${szókulcs[i]}:</b> ${adatok[keys[i]]}</p>`;
        adatkiir.classList.add("adatkiir");

        Info.appendChild(adatkiir)
    }

    // Összerak += `<p><b>${fordítás}:</b> ${érték}</p>`;
    // console.log(Összerak);

    // document.getElementById("adatokKiir").innerHTML = Összerak;
}

function close() {
    Info.classList.remove("adatokKiirVisible");
}