function getValue(id) {
    const getId = document.getElementById(id).value;
    return getId;
}

function setValue(id, value) {
    const targetId = document.getElementById(id);
    targetId.value = value;
}