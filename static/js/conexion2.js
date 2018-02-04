
var serviceURL = "http://"+window.location.hostname+"/juegosmundial/";
//var serviceURL = "http://"+window.location.hostname+":8000/juegosmundial/";

getTiposList();

$(document).ajaxError(function(event, request, settings) {
    console.log("conexion Ajax");
    alert("Error conectadose al servidor");
});

function getTiposList() {
    var docs = [""];
    var respp = ["pruebita","pruebita2"]; 
    var resppppp = 1;   

    var aux111 = ""
    console.log("estamos dentro")
    $.ajax({
        url: serviceURL + 'listado',
        async: false,
        success: function(data) {

    	console.log(data);
        console.log(typeof(data));
        console.log(data[0]);
        console.log(data[1]);
        var auxpreguntas = data[0];
        var auxrespuestas = data[1];

        for (var i = 0; i < auxpreguntas.length; i++) {

            console.log(auxpreguntas[i]);
            console.log(auxpreguntas[i].fields.descripcion);
            console.log(auxpreguntas[i].fields.correcta);
            var arrayrespuestas = []
            for (var j = 0; j < auxpreguntas[i].fields.respuestas.length; j++) {
                var respXpreg = auxpreguntas[i].fields.respuestas[j]; 

                for (var z = 0; z < auxrespuestas.length; z++) {
                    //console.log(auxrespuestas[z].pk);

                    if (respXpreg == auxrespuestas[z].pk) {
                        arrayrespuestas.push(auxrespuestas[z].fields.descripcion)
                    }

                }

            }

            docs.push({
                quest : auxpreguntas[i].fields.descripcion,
                ans : arrayrespuestas, 
                res : auxpreguntas[i].fields.correcta 
             });
        }
        

    }});   


    console.log(docs)


    localStorage.setItem("probemos", JSON.stringify(docs));
    
  
}


