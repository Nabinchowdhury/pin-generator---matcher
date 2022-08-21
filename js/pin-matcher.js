document.getElementById("submit-btn").addEventListener('click', function () {
    let generatedPin = getValue("random-pin-field");
    let typedPin = getValue("typed-pin-field");

    if (generatedPin === typedPin) {
        console.log("matched")
        setValue("random-pin-field", "");
        setValue("typed-pin-field", "");
        document.getElementById('matched').style.display = "block";
        document.getElementById('unmatched').style.display = "none";
    }
    else {
        console.log("not-matched")

        document.getElementById('unmatched').style.display = "block";
        document.getElementById('matched').style.display = "none";
    }

})