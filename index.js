var defUsername = "acunetixtechie"
var defPassword = "acunetix"
function adminLogin() {
    if (userName.value ==defUsername && userPassword.value == defPassword) {
        alert("Hello "+ adminname.value +" you have successfully logged in on " + Date())
        location.replace("newTodoPro.html")
    } else {
        warningInfo.innerHTML ="incorrect username or password&#128520;"
        warningInfo.style.color = "red"  
    }
    userName.value =""
    userPassword.value =""
}