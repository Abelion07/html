const rangeInput = document.getElementById("rangeInput");
        const rangeValue = document.getElementById("rangeValue");
        const kiir = document.getElementById("password");

        document.addEventListener("input", () => {
            rangeValue.textContent = rangeInput.value;
        })

        const characters = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        function generatePassword(length) {
            let password = '';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charactersLength);
                password += characters[randomIndex];
            }
            return password;
        }

        let copybtn = document.getElementById("copy");
        let newpassword = "";
        function btnClicked() {
            newpassword = generatePassword(rangeInput.value);
            kiir.innerHTML = newpassword;
        }

        copybtn.addEventListener("click", () => {
            navigator.clipboard.writeText(newpassword);
        })