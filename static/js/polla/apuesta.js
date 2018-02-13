$(document).ready(function () {

    $(".grupo").click(function () {
        var grupo = $(this).attr("grupo");
        console.log("Grupo : " + grupo);
        $("#yourIframe").attr("src", "/juegosmundial/grupo"+grupo+"");

    });

    $(".apuesta").click(function () {
        var monto = $(this).html().split("<br>")[1];
        localStorage.setItem("monto", monto);
        console.log("Apuesta : " + monto);
    });

    $(".importe").click(function () {
        var importe = $(this).html().trim();
        var monto = localStorage.getItem("monto");
        console.log("Importe : " + importe);
        $("#importe").html(
        `
        ${importe} <span class="caret"></span>
        `);
        var apuesta = monto * importe;
        console.log("Monto a ganar : " + apuesta);
        $("#apuesta").val(apuesta.toFixed(3));

    });

    $("#apostar").click(function () {
        var op = Math.round(Math.random());
        if(op === 1){
            swal("Ganaste", "El monto que ganaste es " + $("#apuesta").val(), "success");
        }else{
            swal("Perdiste", "Intentalo otra vez", "error");
        }
    });


});