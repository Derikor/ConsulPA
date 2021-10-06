const artyom = new Artyom();

// CONFIGURACION CABECERA
$('#empe').click(function(){artyom.say("Bienvenido al Consultorio Virtual de Primeros Auxilios, en ,que puedo ayudarle",{
    lang:"es-ES"
})})
$('#emp').mouseover(function(){artyom.say("Empezar",{lang:"es-ES"})})
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
                artyom.say("Bienvenido sea usted");   
            }
            if (i==1 || i==2){
                artyom.say("buenos dias que desea consultar");   
            }
            if (i==3){
                artyom.say("buenas tardes que desea consultar");   
            }
            if (i==4){
                artyom.say("buenas noches que desea consultar");   
            }
         }
    },
    {
        indexes: ['volver al inicio','abrir quemaduras','abrir hemorragias','abrir heridas'],
        action: function(i){
            if (i==0){
                artyom.say("volviendo a la ventana principal"); 
                window.open("index.html",'_blank');
            }
            if (i==1){
                artyom.say("abriendo ventana de quemaduras");   
                window.open("quemadura.html",'_blank');
            }
            if (i==2){
                artyom.say("abriendo ventana de hemorragias");   
                window.open("hemorragia.html",'_blank');
            }
            if (i==3){
                artyom.say("abriendo ventana de heridas");   
                window.open("herida.html",'_blank');
            }
         }
    },
    {
        indexes: ['limpiar'],
        action: function(){
          artyom.say("Limpiando conversación");
          $('#salida').val('');
         }
    },   
 ]);

function enter(e){
    var m = $('#salida')
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) alert('enter');
}

 artyom.redirectRecognizedTextOutput(function(text,isfinal){
     var span = $('#salida');
     if(isfinal){
         span.val(text);
     }
 });

// Esta funcion inicia artyom en el reconocimiento continuo y obedecera comandos por siempre (requiere conexión https para prevenir el dialogo de permiso de microfono continuo)
function start(){
artyom.fatality();// Detener cualquier instancia previa

setTimeout(function(){// Esperar 250ms para inicializar
 artyom.initialize({
    lang: "es-ES",// Más lenguajes son soportados
    continuous:false,// Artyom obedecera por siempre
    listen:true, // Iniciar !
    debug:true, // Muestra un informe en la consola
    speed:1 // Habla normalmente
}).then(function(){
    console.log('comenzando a escuchar');
});
},250);
}
// Luego pausar reconocimiento de comandos
artyom.dontObey();

// Intenta ejecutar el comando decir hola ! y nada pasara,
// pero en 10 segundos, el reconocimiento de comandos será reanudado
setTimeout(function(){
artyom.obey();

// di decir hola y el comando será activado !
}, 10000);

 function stop(){
     artyom.fatality();
 }