document.getElementById('contactFormButton').addEventListener("click", function () {
    var nameValue, emailValue, messageValue;

    nameValue = document.getElementById('name').value;
    emailValue = document.getElementById('email').value;
    messageValue = document.getElementById('message').value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
});