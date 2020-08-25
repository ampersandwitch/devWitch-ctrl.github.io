const myName = document.getElementById('name');

function updateName() {
    changeName(requestName());
}

function requestName() {
    const name = prompt('What is your name?');

    return name;
}

function changeName(name) {
    const defaultName = 'Inigo Montoya';
    const displayName = (name.length > 0) ? name : defaultName;
    myName.textContent = `${displayName}`;
}
console.log(myName)
if (myName != undefined) {
    myName.addEventListener('click', updateName);
}
