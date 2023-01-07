
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "whymissu1228@gmail.com",
        Password: "8CF12C0FC4A6D3D56D8C43A5E9920DF65099",
        To: 'whymissu1228@gmail.com',
        From: document.getElementById("yourEmail").value,
        Subject: "From my Portfolio",
        Body: "from: " + document.getElementById("yourName").value + "\n"
            + document.getElementById("yourEmail").value + "\n"
            + document.getElementById("yourMessage").value
    }).then(
        // message => alert(message)
        clearThis(document.getElementById("yourName")),
        clearThis(document.getElementById("yourEmail")),
        clearThis(document.getElementById("yourMessage")),
        document.getElementById("yourSubmit").value = "Successful sent",
        document.getElementById("yourSubmit").style.color = "rgb(139, 0, 0)"
    );
}
function clearThis(target) {
    target.value= "";
}