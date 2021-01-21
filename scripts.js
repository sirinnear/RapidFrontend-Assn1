
var validateEmail = function(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return (pattern.test(email));
};

var getValidStatus = function() {
    if (validateEmail(document.getElementById("email").value))
    {
        document.getElementById("errorTxt").innerHTML = " ";
        document.getElementById("email").classList.remove("errorStyle");
        document.getElementById("email").classList.add("validStyle");
    }
    else
    {
        document.getElementById("errorTxt").innerHTML = "A valid email is required";
        document.getElementById("email").classList.remove("validStyle");
        document.getElementById("email").classList.add("errorStyle");
    }
};

var buttonClick = function() {
    if (validateEmail(document.getElementById("email").value))
    {
        document.getElementById("form").style.display = "none";
        document.getElementById("msg").style.display = "block";
    }
};