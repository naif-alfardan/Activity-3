let obj = document.getElementById("uMessage");
let obj2 = document.getElementById("pMessage");
let obj3 = document.getElementById("password")

function usrMessage() {
    obj.style.display = "inline";
    obj2.style.display = 'none'
}

function pwdMessage() {
    obj.style.display = 'none';
    obj2.innerText = 'Write password';

    obj2.style.display = 'inline';
}

function check() {
    if (obj3.value.length === 0) {
        obj2.innerText = "enter a password can't submit without it"
        obj2.style.display = 'inline';
        event.preventDefault();
    }
}
