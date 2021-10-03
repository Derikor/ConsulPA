const artyom = new Artyom();

// CONFIGURACION CABECERA
$('#inicio').mouseover(function(){artyom.say("iniciando")})
$('#primaux').mouseover(function(){artyom.say("Primeros Auxilios")})
    $('li#definicion').mouseover(function(){artyom.say("definición").attr('definicion')})
    $('li#definicion').mouseout(function(){artyom.shutUp()})
    $('li#heridas').mouseover(function(){artyom.say("enlace a heridas")})
    $('li#heridas').mouseout(function(){artyom.shutUp()})
    $('li#hemorragias').mouseover(function(){artyom.say("enlace a hemorragias")})
    $('li#hemorragias').mouseout(function(){artyom.shutUp()})
$('#conversar').mouseover(function(){artyom.say("conversar con asistente virtual")})
$('#leequema').mouseover(function(){artyom.say("Leer el contenido de quemadura")})


$('#leequema').click(function (e) {
    e.preventDefault();
    var q = $('#quema').text();
    var cla = $('#clasquema').text();
    if (artyom.speechSupported()) {
        artyom.say(q,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(cla,{
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


setTimeout(function(){// Esperar 250ms para inicializar
    artyom.initialize({
       lang: "es-ES",// Más lenguajes son soportados
       continuous:false,// Reconoce 1 solo comando y basta de escuchar
       listen:true, // Iniciar !
       debug:true, // Muestra un informe en la consola
       speed:1 // Habla normalmente
   }).then(function(){
       console.log('comenzando a escuchar');
   });
   },250);

setTimeout(function(){// Esperar 250ms para inicializar
    artyom.initialize({
       lang: "es-ES",// Más lenguajes son soportados
       continuous:true,// Artyom obedecera por siempre
       listen:true, // Iniciar !
       debug:true, // Muestra un informe en la consola
       speed:1 // Habla normalmente
   }).then(function(){
       console.log('comenzando a escuchar');
   });
   },250);
   // Luego pausar reconocimiento de comandos
   artyom.dontObey();
   
   // Intenta ejecutar el comando decir hola ! y nada pasara,
   // pero en 10 segundos, el reconocimiento de comandos será reanudado
   setTimeout(function(){
   artyom.obey();
   
   // di decir hola y el comando será activado !
   }, 10000);


   artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches'],
        action: function(i){
            if (i==0){
                artyom.say("Hola que tal");   
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
        indexes: ['Hola','buen dia'],
        action: function(i){
            if (i==0){
                artyom.say("Hola que tal");   
            }
            if (i==2){
                artyom.say("Hola, buenos dias");   
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
    {
        indexes: ['limpiar'],
        action: function(){
          $('#salida').val('');
         }
    },   
 ]);