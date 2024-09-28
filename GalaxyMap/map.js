// console.log("Hello World!")
let marker;
const kiir = document.querySelector(".kiir");
let keys = ["Name", "Region", "Sector", "System", "Inhabitants", "Capital_City", "Grid_Coordinates"];
let szókulcs = ["Név", "Régió", "Szektor", "Rendszer", "Faj", "Főváros", "Koordináták"];

planets.forEach(planet => {
    if (planet.Coordinates.length == 0) {
        console.log("Nincs találat")
    }
    else {
        console.log(planet.Coordinates);
        marker = L.marker(planet.Coordinates).addTo(map);
        marker.addEventListener("click", () => {
            while (kiir.hasChildNodes()) {
                kiir.removeChild(kiir.firstChild)
            }
            kiir.classList.add("kiirVisible");

            for (let i = 0; i < keys.length; i++) {
                let aktbolygó = document.createElement("div");
                aktbolygó.innerHTML = `<p>${szókulcs[i]}: ${planet[keys[i]]}</p>`;
                aktbolygó.classList.add("aktbolygó");

                kiir.appendChild(aktbolygó)
            }

            let closebtn = document.createElement("p");
            closebtn.innerHTML = "&times;"
            closebtn.classList.add("closebtn2");
            closebtn.onclick = close;

            kiir.appendChild(closebtn);
            kiir.appendChild(aktbolygó);
        });
    }

})

function close() {
    kiir.classList.remove("kiirVisible")
}