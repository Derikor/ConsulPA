function validar (){
    var usuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;
    if(usuario == "villacooperativa" && contraseña == "centrodesalud"){
        location.href ="./form.html";
    }else{
        alert("incorrect")
    }
}