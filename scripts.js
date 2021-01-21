
var validateEmail = function(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (pattern.test(email))
    {
        return (true);
    }
    else
    {
        return (false);
    }
}

var getValidStatus = function() {
    if (validateEmail(document.getElementById("email").value))
    {
        document.getElementById("errorTxt").innerHTML = " ";
        document.getElementById("email").classList.remove("errorStyle");
    }
    else
    {
        document.getElementById("errorTxt").innerHTML = "A valid email is required";
        document.getElementById("email").classList.add("errorStyle");
    }
}