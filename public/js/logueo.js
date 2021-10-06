function validar (){
    var usuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;
    if(usuario == "villacooperativa"||"villa cooperativa" && contraseña == "centrodesalud"||"centro de salud"){
        location.href ="./msjusuario.html";
    }else{
        document.getElementById("f").innerHTML = "usuario o contraseña incorrecta ";
            return false
    }
}