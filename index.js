// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Agrega un listener cuando el DOM está completamente cargado

    // Selecciona elementos del DOM
    const textareaCipher = document.getElementById("cipher");
    const selectCipherNumber = document.getElementById("cipher-number");
    const buttonEncrypt = document.getElementById("decodificar");
    const inputWord = document.querySelector(".inputWord");
    const cipherShiftTranslated = document.getElementById("cipherShiftTranslated");

    // Agrega un evento click al botón "Encriptar"
    buttonEncrypt.addEventListener("click", function () {
        // Obtiene el texto del textarea y el número seleccionado
        const message = textareaCipher.value;
        const shiftNumber = Number(selectCipherNumber.value);

        // Realiza la encriptación usando la función cesarCipher
        const encryptedMessage = cesarCipher(message, shiftNumber);

        // Muestra el resultado en la página
        inputWord.textContent = message;
        cipherShiftTranslated.textContent = encryptedMessage;
    });

    // Función para realizar el cifrado César
    function cesarCipher(message, n) {
        const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";

        for (let i = 0; i < message.length; i++) {
            const char = message[i];

            // Verifica si el carácter es una letra del alfabeto
            const isLetter = alphabet.includes(char);

            if (isLetter) {
                const isUpperCase = char === char.toUpperCase();
                const currentIndex = alphabet.indexOf(char.toLowerCase());
                const newIndex = (currentIndex + n) % 26;

                // Maneja letras mayúsculas o minúsculas según el caso original
                result += isUpperCase ? alphabet[newIndex + 26].toUpperCase() : alphabet[newIndex];
            } else {
                // Si no es una letra, simplemente agrega el carácter original
                result += char;
            }
        }

        return result;
    }
});
