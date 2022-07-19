//this function is called when 
function checkPassword() {
    //assigns the new variable : password , document . get element by id: and we want the id from the html page: password1
    var password = document.getElementById("password1");
    var passwordText = password.value;
    if(passwordText == "123") {
        //pops up an alert box telling you you won, the return true allows the link to work.
        alert("Access Granted")
        return true;
    }
    //pops up an alert box telling you, you have failed. the return false does not allow you access to the link
    alert("Wrong password!");
    return false;
}
