
var validateEmail = function(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (pattern.test(email))
    {
        document.getElementById("placeholder").innerHTML = " ";
    }
    else
    {
        document.getElementById("placeholder").innerHTML = "A valid email is required";
    }
}