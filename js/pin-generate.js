document.getElementById("generate-pin").addEventListener('click', function () {
    document.getElementById('unmatched').style.display = "none";
    document.getElementById('matched').style.display = "none";
    setValue("typed-pin-field", "")
    const pin = checkRandomNumber();

    // deleteBtn.removeAttribute('disabled');
    setValue("random-pin-field", pin);

})

function checkRandomNumber() {
    const randomNumber = generateRandomNumber();
    const randomNumberString = randomNumber + "";
    // console.log(randomNumberString.length);
    if (randomNumberString.length == 4) {
        // console.log(randomNumber)
        return randomNumber;
    }

    else {
        return generateRandomNumber();
    }
}
function generateRandomNumber() {
    const random = Math.round(Math.random() * 10000);
    return random;
    // console.log(random);
}

