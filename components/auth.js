export function authUser() {
    const authComp = document.createElement("form");
    authComp.className = "auth-course";
    authComp.setAttribute("name", "user-data");

    const nameInput = document.createElement("input");
    const nameLabel = document.createElement("label");
    const passInput = document.createElement("input");
    const passLabel = document.createElement("label");
    passInput.addEventListener("input", changeButDsbl);
    nameLabel.textContent = "Name";
    passLabel.textContent = "Password";

    authComp.setAttribute("name", "user-data");
    nameInput.setAttribute("name", "nameuser");
    nameInput.setAttribute("id", "user-name-input");
    passInput.setAttribute("id", "user-pass-input");
    passInput.setAttribute("name", "passworduser");
    passInput.setAttribute("type", "password");

    const butSend = document.createElement("button");
    butSend.setAttribute("type", "submit");
    butSend.setAttribute("id", "user-send-btn");
    butSend.disabled = true;
    butSend.textContent = "Send data";
    butSend.addEventListener("click", sendForm);

    authComp.append(nameLabel);
    authComp.append(nameInput);
    authComp.append(passLabel);
    authComp.append(passInput);
    authComp.append(butSend);

    return authComp;
}

function sendForm(Evgeny) {
    let userName = document.forms["user-data"].nameuser;
    let passName = document.forms["user-data"].passworduser;
    localStorage.setItem("nameUser", userName.value);
    console.log("nameUser", userName.value);
}

function changeButDsbl(e) {
    let passName = document.forms["user-data"].passworduser;

    if (passName.value.length > 4) {
        document.getElementById("user-send-btn").disabled = false;
    }
    if (passName.value.length < 5) {
        document.getElementById("user-send-btn").disabled = true;
    }
}
