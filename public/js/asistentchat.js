const artyom = new Artyom();

// CONFIGURACION CABECERA
$('#emp').mouseover(function(){artyom.say("Consultar",{lang:"es-ES"})})
$('#emp').mouseout(function(){artyom.shutUp()})
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
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches','gracias'],
        action: function(i){
            if (i==0){
                artyom.say("Hola, Bienvenido sea usted");   
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
            if (i==5){
                artyom.say("de nada");   
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
        indexes: ['tipos de quemaduras','qué hacer en caso de una quemadura','qué hago en caso de una quemadura','qué hago en caso de una quemadura menor','cómo procedo ante una quemadura de primer grado','qué hago en caso de una quemadura de primer grado','diferencia entre los tipos de grados de las quemaduras','deferencia entre los tipos de quemaduras'],
        action: function(i){
            if (i==0){
                artyom.say("existen quemaduras de primer grado de segundo grado y de tercer grado");   
            }
            if (i==1 || i==2){
                artyom.say("mencione el tipo de quemadura que presenta");   
            }
            if (i==3 || i==4 || i==5){
                artyom.say("En caso de una quemadura menor o de primer grado");
                artyom.say("Deje correr abundante agua fría sobre el área afectada o mantenga la zona de quemadura en un espacio llena de agua fría");
                artyom.say("Permanesca de entre 10 a 30 min mientras va calmando y reconfortando a la persona");
                artyom.say("proteja el área afectada de posibles rozamientos");
                artyom.say("Una vez que se enfríe el área afetada de la piel, coloque loción humectante que contenga áloe para ayudar");
                artyom.say("Por ultimo cubrir el área afectada con vendaje estéril");
            }
            if (i==6 || i==7){
                artyom.say("primer grado,Afectan solo la capa externa de la piel. Causan dolor, enrojecimiento e hinchazón");   
            }
         }
    },
    {
        indexes: ['tipos de hemorragias','qué son las hemorragias internas','qué es una hemorragia interna','qué son las hemorragias externas','qué es una hemorragia externa','qué hacer en caso de una hemorragia','qué hago en caso de una hemorragia','qué hago en caso de una hemorragia externa','cómo procedo ante una hemorragia externa','qué hacer en caso de una hemorragia externa'],
        action: function(i){
            if (i==0){
                artyom.say("existen hemorragias internas y hemorragias externas");   
            }
            if (i==1 || i==2){
                artyom.say("hemorragias internas, se producen por la ruptura de vasos sanguineos que se quedan dentro del cuerpo, principalmente en la parte del abdomen, son causadas por: enfermedades de intestino o estómago, transtornos vasculares y traumatismos");   
            }
            if (i==3 || i==4){
                artyom.say("hemorragias externas, son producidas por la salida de sangre al exterior a través de la piel producidas por heridas abiertas o por orificios del cuerpo, ya sean por la nariz, boca, ano, meato urinario y oidos");   
            }
            if (i==5 || i==6){
                artyom.say("debe proceder a detener la hemorragia, para ello, especifique el tipo de hemorragia y proceder con la explicación de la asistencia");   
            }
            if (i==7 || i==8 || i==9){
                artyom.say("En caso de una hemorragia externa");
                artyom.say("Primeramente debe aplicar compresion local, para detener el sangrado, ya sea con uno o dos dedos o con la mano presionando fuertemente.");
                artyom.say("Una vez haya cesado el sangrado realizar un vendaje compresivo para mantener aislado de bacterias");
                artyom.say("Se utiliza torniquete solo en caso de extremidades y cuando la compresion no es suficiente, se utiliza como ultimo recurso ya que tiene sus riesgos");
                artyom.say("por ultimo llevar a emergencias para un tratamiento adecuado");
            }
         }
    },
    {
        indexes: ['tipos de heridas','heridas por incisión','que es una hemorragia interna','qué son las hemorragias externas','que es una hemorragia interna','qué hacer en caso de una herida','qué hago en caso de una herida','qué hago en caso de una herida contusa','qué hago en caso de una herida por golpe','qué hago en caso de un golpe'],
        action: function(i){
            if (i==0){
                artyom.say("existen diferentes tipos de heridas entre las cuales tenemos");
                artyom.say("heridas: por incisión, por contusión, superficiales, por su profundidad, y por excoriación");   
            }
            if (i==1){
                artyom.say("causadas por objetos afilados que generan daño en la piel");   
            }
            if (i==3 || i==4){
                artyom.say("hemorragias externas, son producidas por la salida de sangre al exterior a través de la piel producidas por heridas abiertas o por orificios del cuerpo, ya sean por la nariz, boca, ano, meato urinario y oidos");   
            }
            if (i==5 || i==6){
                artyom.say("En caso de una herida");
                artyom.say("debe Preparar gasas, antiséptico, tiritas, guantes, desinfectar pinzas y tijeras (limpiándolas con una gasa empapada en alcohol y luego secándola con otra estéril), etc., todo sobre una superficie limpia. ");
                artyom.say("Lavado de manos con agua y jabón. ");
                artyom.say("Descubrir el tipo de herida que este presentando");
                artyom.say("Realizar la asistencia de acuerdo al tipo de herida");
            }
            if (i==7 || i==8 || i==9){
                artyom.say("En caso de una herida contusa o por golpe");
                artyom.say("El primer paso que debe realizar, es la aplicacion del frio (compresas de hielo) en el area afectada");
                artyom.say("Importante: no aplicar directamente el hielo sobre la piel");
                artyom.say("Debe guardar reposo de la zona afectada");
                artyom.say("Puede aplicar vendaje compresivo para cubrir la zona");
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