document.getElementById("calc-body").addEventListener('click', function (e) {
    const typedNumber = (e.target.innerText);

    const previousTypedNumber = getValue("typed-pin-field");

    if (isNaN(typedNumber)) {
        if (typedNumber === "C") {
            // typeFieldNumber.value = "";
            setValue("typed-pin-field", "");
        }
        else if (typedNumber === "<") {
            const preNumArray = previousTypedNumber.split('');
            preNumArray.pop();
            const newNumArray = preNumArray.join('');
            // typeFieldNumber.value = newNumArray;
            setValue("typed-pin-field", newNumArray);
        }
    }

    else {
        const newTypedNumber = previousTypedNumber + typedNumber;
        // typeFieldNumber.value = newTypedNumber;
        setValue("typed-pin-field", newTypedNumber);
    }
})