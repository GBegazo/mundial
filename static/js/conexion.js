
    
var serviceURL = "http://127.0.0.1:8000/juegosmundial/";
console.log("hola");


getTiposList();

$(document).ajaxError(function(event, request, settings) {
    console.log("conexion Ajax");
    alert("Error conectadose al servidor");
});


function getTiposList() {
  
    $.getJSON(serviceURL + 'listado', function(data) {
    	console.log(data);
        console.log(typeof(data));
       //     var cad;
        $.each(data, function(index, preguntas) {
     //          cad = preguntas.correcta;
            console.log(preguntas);
            console.log(typeof(preguntas));
            console.log(preguntas.model);
            console.log(preguntas.pk);
            console.log(preguntas.fields);
            console.log('hola'+preguntas.fields.descripcion);
            console.log(preguntas.fields.correcta);
            console.log(preguntas.fields.respuestas[0]);
       
        }); 
       
    });
    
}
