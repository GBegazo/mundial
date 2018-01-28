
    $(function(){

        var docs = ["", 
   {quest : "¿Qué director técnico ha logrado alzarse con la Copa del Mundo en más de una ocasión?",
    ans : [
        "Luiz Felipe Scolari",
        "Vittorio Pozzo",
        "Marcello Lippi",
        "Franz Beckenbauer"
    ],
    res : 1}
    ,
    {quest : "¿Qué personas han logrado ganar una Copa del Mundo como jugador y entrenador?",
    ans : [
        "Franz Beckenbauer, Aime Jacquet",
        "Marcello Lippi, Alf Ramsey",
        "Carlos Alberto Pareira, Helmut Schön",
        "Mario Zagallo, Franz Beckenbauer"
    ],
    res : 3}
    ,
    {quest : "¿Qué equipo es el más ganador de las Copas del Mundo?",
    ans : [
        "Brasil",
        "Italia",
        "Alemania",
        "Argentina"
    ],
    res : 0}
    ,
    {quest : "¿Qué equipo tiene una mayor cantidad de goles anotados en la Copa del Mundo?",
    ans : [
        "Brasil",
        "Holanda",
        "Alemania",
        "Italia"
    ],
    res : 2}
    ,
    {quest : "¿Cuál es el equipo que ha pasado más tiempo sin volver a clasificarse a un Mundial?",
    ans : [
        "Bulgaria",
        "Egipto",
        "Perú",
        "China"
    ],
    res : 1}
    ,
    {quest : "¿Cuál es la mayor goleada sucedida en la Copa del Mundo?",
    ans : [
        "Hungría vs El Salvador, 1982",
        "Brasil vs Alemania, 2014",
        "Uruguay vs Bolivia, 1950",
        "Alemania vs Arabia Saudita, 2002"
    ],
    res : 0}
    ,
    {quest : "¿Cuál es el jugador que ha anotado más goles en una sola Copa del Mundo?",
    ans : [
        "Ronaldo, Brasil",
        "Gerd Müller, Alemania",
        "Just Fontaine, Francia",
        "Miroslav Klose, Alemania"
    ],
    res : 2}
    ,
    {quest : "¿Quién es el jugador con más partidos jugados en los mundiales?",
    ans : [
        "Lothar Matthaeus, Alemania",
        "Wladyslaw Zmuda, Polonia",
        "Diego Maradona, Argentina",
        "Paolo Maldini, Italia"
    ],
    res : 0}
    ,
    {quest : "¿Cuál es el jugador con más Copas del Mundo jugadas?",
    ans : [
        "Gianluigi Buffon",
        "Nilton Santos",
        "Antonio Carbajal",
        "Karl-Heinz Schnellinger"
    ],
    res : 2}
    ,
    {quest : "¿Cuál fue el gol más rápido de los mundiales?",
    ans : [
        "Bryan Robson, Inglaterra vs Francia, España 1982",
        "Ernest Lehner, Alemania vs Austria, Italia 1934",
        "Bernard Lacombe, Francia vs Italia, Argentina 1978",
        "Hakan Sukür, Turquia vs Corea del Sur, Corea-Japon 2002"
    ],
    res : 3}
    ];  

    var now = 0;
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
        loading.hide();
    });
    
    ///////////
    var ancho = 0;
    console.log(ancho);
    /////////////

    $("label.btn").on('click',function () {
        if(now > 9){
            console.log("no es en carga");
            alert("No mas preguntas");
        }else{
            /////////
            if (now<9) {
            carga();
            }

            ancho = ancho + 10;
            document.getElementById("progresopreg").style.width = ancho+"%";
            document.getElementById("progresopreg").innerHTML = ancho+"%";
            //////////
            var choice = $(this).find('input:radio').val();
            $('#loadbar').show();
            $('#quiz').fadeOut();
            now++;
            setTimeout(function(){
                $( "#answer" ).html(  $(this).checking(choice) );      
                $('#quiz').show();
                $('#loadbar').fadeOut();
                $(this).changeQuestion();
                $(this).changeOptions();
                $("input:radio").attr("checked", false);
                $(".foc").removeClass("active");
                $(".foc").removeClass("focus");
               /* something else */
            }, 1500);
        }
    });

    console.log("paso2222");
    var auxtemp = document.getElementById("temporizador").innerHTML;
    console.log(auxtemp);
    if (auxtemp==15) {
        console.log("paso");

    }



    //el id de la respuesta es 3 
    $.fn.changeQuestion = function(preg) {
        $("#pregunta").html('<span class="label label-warning" id="qid">'+(now+1)+'</span>'+ docs[now+1].quest);
    };    

    $.fn.changeOptions = function(preg) {
        for(var i = 1 ; i <=4 ; i++){
            $("#p"+i).html('<span class="btn-label"><i class="glyphicon glyphicon-chevron-right">'+
           '</i></span> <input type="radio" name="q_answer" value="'+(i-1)+'">'+docs[now+1].ans[i-1]);
        }
    };


    var auxpuntos = 0;
    $.fn.checking = function(ck) {
        console.log("Marcado : "+ck);
        console.log("Res : "+docs[now].res);
        if (ck != docs[now].res){
            return 'INCORRECTO';
        }else{
            auxpuntos = auxpuntos + 10;
            document.getElementById("puntos").innerHTML = auxpuntos +" pts";
            return 'CORRECTO';
        }
    }; 



var cronometro;

    function carga() {
        var contador_s =1;
   //     progressbar.value = 0;
       
        clearInterval(cronometro);
        cronometro = setInterval(
        function(){
        if(contador_s>15)
        {


console.log("nowww"+now);
        if(now == 9){
            
            ancho = ancho + 10;
            document.getElementById("progresopreg").style.width = ancho+"%";
            document.getElementById("progresopreg").innerHTML = ancho+"%";
            
            console.log("es en carga");
            alert("No mas preguntas");
        
            clearInterval(cronometro);
            

            now++;
            }else if(now<=8) {
            /////////
            clearInterval(cronometro);
            carga();
            ancho = ancho + 10;
            document.getElementById("progresopreg").style.width = ancho+"%";
            document.getElementById("progresopreg").innerHTML = ancho+"%";
            //////////
            //var choice = $(this).find('input:radio').val();
            var choice = 5;
            $('#loadbar').show();
            $('#quiz').fadeOut();
            now++;
            setTimeout(function(){
                $( "#answer" ).html('INCORRECTO');      
                $('#quiz').show();
                $('#loadbar').fadeOut();
                $(this).changeQuestion();
                $(this).changeOptions();
                $("input:radio").attr("checked", false);
                $(".foc").removeClass("active");
                $(".foc").removeClass("focus");
               
            }, 1500);
        }
   
           

        }else{

        document.getElementById("temporizador").innerHTML = contador_s;
        contador_s++;


          //      progress = document.getElementById("progressbar");
          //      progressbar.value = progress.value+1;

            }
        }
            ,1000);

    };
    carga();















}); 

