let magyar = 0;
var aktérték = 0;
var aktkulcs = 0;

let szotar = {}
document.getElementById('fileInput').addEventListener('change', function () {
    const reader = new FileReader();

    reader.onload = function () {
        const sorok = reader.result.split("\n");
        sorok.forEach(line => {
            if (line.trim() === "") return;
            const [idegen, hazai] = line.trim().split(" - ");
            szotar[hazai.trim()] = idegen.trim();
        });
        magyar = Object.keys(szotar);
        aktkulcs = magyar[aktérték];
        kérdés();
        szamlalo();
    };
    reader.readAsText(this.files[0]);
});



function kérdés() {
    document.getElementById('kérdés').innerHTML = aktkulcs;
}

let AnswerElement = document.getElementById("eredmény");
function checkAnswer() {
    let userInput = document.getElementById("bekértszó").value.toLowerCase();
    let correctAnswer = szotar[aktkulcs];
    if (userInput === correctAnswer.toLowerCase()) {
        //Ha jó a válasz
        document.getElementById('bekértszó').value = '';
        document.getElementById('bekértszó').focus();
        AnswerElement.innerHTML = '';

        aktérték++;
        if (aktérték < magyar.length) {
            //Ha van következő sor, akkor tovább lép
            aktkulcs = magyar[aktérték];
            kérdés();
        }
        else {
            //Ha nincs következő sor, akkor újra indul
            alert("A végére értél! Újrakezdés!")
            aktérték = 0;
            aktkulcs = magyar[aktérték];
            kérdés();
        }
        szamlalo();
    }
    else {
        //Ha nem jó a válasz
        AnswerElement.innerHTML = correctAnswer;
        AnswerElement.style.color = "red";
    }
}

document.addEventListener("keydown", eventkey => {
    if (eventkey.key == "Enter") {
        checkAnswer();
    }
})

function szamlalo() {
    var mennyibol = document.getElementById("mennyibol");
    var mennyi = document.getElementById("mennyi");
    mennyi.innerHTML = magyar.length;
    mennyibol.innerHTML = aktérték;
    console.log(aktérték)
}

function speak() {
    var text = document.getElementById("bekértszó").value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function flip() {
    if (Object.keys(szotar).length === 0 || magyar === 0) { alert("Nincs szó betöltve!"); return; }
    let szotar2 = {}
    Object.keys(szotar).forEach(key => {
        szotar2[szotar[key]] = key;
    });
    szotar = szotar2;
    magyar = Object.keys(szotar);

    aktérték = 0;
    aktkulcs = magyar[aktérték];
    kérdés();
    szamlalo();
}
