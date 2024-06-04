function DNStoRNS(dns_lanc) {
    const kodtabla1 = { 'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C' };
    const rns_lanc = [...dns_lanc].map(base => kodtabla1[base]).join('');
    return rns_lanc
}
function DNStoAntikodon(dns_lanc){
    const kodtabla2 = { 'A': 'A', 'T': 'U', 'C': 'C', 'G': 'G' };
    const antikodonlanc = [...dns_lanc].map(base => kodtabla2[base]).join('');
    return antikodonlanc
}

function bekérés(eInput) {
    const validCharacters = /^[ATGC]*$/;
    const line = eInput.value.toUpperCase();


    if (!validCharacters.test(line)) {
        eInput.value = eInput.value.slice(0, -1);
        return;
    }

    //DNS szál kiírása
    const DNS_outputElementId = 'output-' + eInput.id.split('-')[1];
    let DNS_outputElement = document.getElementById(DNS_outputElementId);
    DNS_outputElement.innerHTML = eInput.value.toUpperCase();

    //mRNS (kodon) szál létrehozása, kiírása
    const rns_lanc = DNStoRNS(line.toUpperCase());
    const Kodon_outputElementId = 'kodonki-' + eInput.id.split('-')[1];
    const Kodon_outputElement = document.getElementById(Kodon_outputElementId);
    Kodon_outputElement.textContent = rns_lanc;

    //tRNS (kodon) szál létrehozása, kiírása
    const antikodonlanc = DNStoAntikodon(line.toUpperCase());
    const AntiKodon_outputElementId = 'antikodonki-' + eInput.id.split('-')[1];
    const AntiKodon_outputElement = document.getElementById(AntiKodon_outputElementId);
    AntiKodon_outputElement.textContent = antikodonlanc;
    console.log(antikodonlanc)

    if (line.length === 3) {
        createNewInput(eInput);
    }
}

function createNewInput(currentInput) {
    const inputContainer = document.getElementById('input-container');
    const DNS_outputContainer = document.getElementById('DNS-output-container');
    const KODON_outputContainer = document.getElementById('kodon-output-container');
    const ANTIKODON_outputContainer = document.getElementById('antikodon-output-container');


    // Új input mező létrehozása
    const newInput = document.createElement('input');
    const newId = `input-${inputContainer.children.length + 1}`;
    newInput.type = 'text';
    newInput.id = newId;
    newInput.maxLength = 3;
    newInput.oninput = function () { bekérés(newInput); };
    newInput.onkeydown = function (event) { handleBackspace(event, newInput); };

    const new_DNS_Output = document.createElement('p');
    const new_DNS_OutputId = `output-${inputContainer.children.length + 1}`;
    new_DNS_Output.id = new_DNS_OutputId;

    const new_Kodon_output = document.createElement("p");
    const new_Kodon_outputId = `kodonki-${inputContainer.children.length + 1}`;
    new_Kodon_output.id = new_Kodon_outputId;

    const new_AntiKodon_output = document.createElement("p");
    const new_AntiKodon_outputId = `antikodonki-${inputContainer.children.length + 1}`;
    new_AntiKodon_output.id = new_AntiKodon_outputId;

    inputContainer.appendChild(newInput);
    DNS_outputContainer.appendChild(new_DNS_Output);
    KODON_outputContainer.appendChild(new_Kodon_output);
    ANTIKODON_outputContainer.appendChild(new_AntiKodon_output);

    newInput.focus();
}

//törlés
function handleBackspace(event, input) {
    if (event.key === "Backspace" && input.value.length === 0) {
        const inputContainer = document.getElementById('input-container');
        inputContainer.removeChild(input);

        // Az utolsó input mező fókuszálása
        if (inputContainer.children.length > 0) {
            const lastInput = inputContainer.children[inputContainer.children.length - 1];
            lastInput.focus();
        }
    }
}