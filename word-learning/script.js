let magyar = 0;
var aktérték = 0;
var aktkulcs = 0;

let szotar = {}
document.getElementById('fileInput').addEventListener('change', function () {
    const reader = new FileReader();

    reader.onload = function () {
        const sorok = reader.result.split("\n");
        sorok.forEach(line => {
            const [idegen, hazai] = line.trim().split(" - ");
            szotar[hazai] = idegen;
        });
        magyar = Object.keys(szotar);
        aktkulcs = magyar[aktérték];
        kérdés();
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
            aktérték = 0;
            aktkulcs = magyar[aktérték];
            kérdés();
        }
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
