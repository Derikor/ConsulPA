const artyom = new Artyom();

// CONFIGURACION CABECERA
$('#empe').click(function(){artyom.say("Bienvenido al Consultorio Virtual de Primeros Auxilios, en ,que puedo ayudarle",{
    lang:"es-ES",
    speed:1
})})
$('#empe').mouseover(function(){artyom.say("Empezar",{lang:"es-ES"})})
$('#inicio').mouseover(function(){artyom.say("Iniciando",{lang:"es-ES"})})
$('#primaux').mouseover(function(){artyom.say("Primeros Auxilios",{lang:"es-ES"})})
    $('li#definicion').mouseover(function(){artyom.say("definición",{lang:"es-ES"})})
    $('li#definicion').mouseout(function(){artyom.shutUp()})
    $('li#heridas').mouseover(function(){artyom.say("enlace a heridas",{lang:"es-ES"})})
    $('li#heridas').mouseout(function(){artyom.shutUp()})
    $('li#quemaduras').mouseover(function(){artyom.say("enlace a quemaduras",{lang:"es-ES"})})
    $('li#quemaduras').mouseout(function(){artyom.shutUp()})
    $('li#hemorragias').mouseover(function(){artyom.say("enlace a hemorragias",{lang:"es-ES"})})
    $('li#hemorragias').mouseout(function(){artyom.shutUp()})
$('#conversar').mouseover(function(){artyom.say("conversar con asistente virtual",{lang:"es-ES"})})
$('#inisesion').mouseover(function(){artyom.say("iniciar sessión",{lang:"es-ES"})})
$('#leepa').mouseover(function(){artyom.say("Leer el contenido",{lang:"es-ES"})})
$('#her').mouseover(function(){artyom.say("heridas",{lang:"es-ES"})})
$('#quem').mouseover(function(){artyom.say("quemaduras",{lang:"es-ES"})})
$('#hemo').mouseover(function(){artyom.say("hemorragias",{lang:"es-ES"})})

artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches'],
        action: function(i){
            if (i==0){
                artyom.say("Bienvenido dime que quiere hacer");   
            }
            if (i==1 || i==2){
                artyom.say("Hola, buenos dias");   
            }
            if (i==3){
                artyom.say("Hola, buenas tardes");   
            }
            if (i==4){
                artyom.say("Hola, buenas noches");   
            }
         }
    },
    {
        indexes: ['abrir google','abrir youtube'],
        action: function(i){
            if (i==0){
                artyom.say("abriendo google"); 
                window.open("https://www.google.com/",'_blank');
            }
            if (i==2){
                artyom.say("abriendo youtube");   
                window.open("https://www.youtube.com/");
            }
         }
    },
 ]);

 artyom.redirectRecognizedTextOutput(function(text,isfinal){
     var span = $('#salida');
     if(isfinal){
         span.val(text);
     }
 });



function start(){
artyom.fatality();// Detener cualquier instancia previa

setTimeout(function(){// Esperar 250ms para inicializar
 artyom.initialize({
    lang: "es-ES",
    continuous:true,// Artyom obedecera por siempre
    listen:true, // Iniciar !
    debug:true, // Muestra un informe en la consola
    speed:1 // Habla normalmente
}).then(function(){
    console.log('comenzando a escuchar');
});
},250);
}

 $('#leepa').click(function (e) {
    e.preventDefault();
    var pa = $('#pa').text();
    var p = $('#defpa').text();
    if (artyom.speechSupported()) {
        artyom.say(pa,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(p,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        });
    } else {
        alert("Tu Navegador no puede hablar");
    }
});

 $('#btnlee').click(function (e) {
            e.preventDefault();
            var btn = $('#btnlee');
            if (artyom.speechSupported()) {
                btn.addClass('disabled');
                btn.attr('disabled', 'disabled');

                var text = $('#def').val();
                if (text) {
                    var lines = $("#def").val().split("\n").filter(function (e) {
                        return e
                    });
                    var totalLines = lines.length - 1;

                    for (var c = 0; c < lines.length; c++) {
                        var line = lines[c];
                        if (totalLines == c) {
                            artyom.say(line, {
                                onEnd: function () {
                                    btn.removeAttr('disabled');
                                    btn.removeClass('disabled');
                                }
                            });
                        } else {
                            artyom.say(line);
                        }
                    }
                }
            } else {
                alert("Tu Navegador no puede hablar");
            }
        });