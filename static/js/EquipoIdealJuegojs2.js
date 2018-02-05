$(document).ready(function () {
    $(".formacion").click(function () {
        var formacion = $(this).html();
        $("#drop-formaciones").html(
            formacion +
            `<span class="caret"></span>`
        );
        var pos = formacion.trim().split("-");
        var def = pos[0];
        var med = pos[1];
        var del = pos[2];
        printArquero();
        printDefensa(def);
        printMedio(med);
        printDelantero(del);

    });

    function printArquero(){
        $("#arquero").html("");
        $("#arquero").html(
        `
        <div class="col-xs-offset-4 col-xs-4">
            <div class="center">
                <span class="badge">1</span>
            </div>
            <div class="center">
                <a href="#">
                    <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                </a>
            </div>
            <div class="center">
                <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
            </div>
        </div>
        `);
    }

    function printDefensa(def) {
        $("#defensa").html("");
        var ancho;
        switch (def) {
            case "4":
                ancho = 3;
                break;
            case "3":
                ancho = 4;
                break;
            default:
                ancho = 2;
        }
        if (ancho === 3 || ancho === 4) {
            for (var i = 0; i < def; i++) {
                $("#defensa").append(
                    `
                    <div class="nada col-xs-${ancho}">
                        <div class="center">
                            <span class="badge">${(i + 2)}</span>
                        </div>
                        <div class="center">
                            <a href="#">
                                <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                            </a>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                        </div>
                    </div>
                    `
                );
            }
        } else {
            printOne(2, "defensa");
            printThree(3, "defensa");
            printOne(6, "defensa");
        }

    }

    function printMedio(med) {
        $("#medio").html("");
        var ancho;
        switch (med) {
            case "4":
                ancho = 3;
                break;
            case "3":
                ancho = 4;
                break;
            default:
                ancho = 2;
        }
        if (ancho === 3 || ancho === 4) {
            for (var i = 0; i < med; i++) {
                $("#medio").append(
                    `
                    <div class="nada col-xs-${ancho}">
                        <div class="center">
                            <span class="badge">100</span>
                        </div>
                        <div class="center">
                            <a href="#">
                                <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                            </a>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                        </div>
                    </div>
                    `
                );
            }
        } else {
            printOne(1, "medio");
            printThree(1, "medio");
            printOne(1, "medio");
        }
    }

    function printDelantero(del) {
        $("#delantero").html("");
        var ancho;
        switch (del) {
            case "1":
                ancho = 12;
                break;
            case "2":
                ancho = 6;
                break;
            default:
                ancho = 4;
        }
        for (var i = 0; i < del; i++) {
            $("#delantero").append(
                `
                <div class="nada col-xs-${ancho}">
                    <div class="center">
                        <span class="badge">99</span>
                    </div>
                    <div class="center">
                        <a href="#">
                            <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                        </a>
                    </div>
                    <div class="center">
                        <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                    </div>
                </div>
                `
            );
        }
    }

    function printOne(num, posicion) {
        $(`#${posicion}`).append(
            `
            <div class="col-xs-2 nada row">
                <div class="col-xs-12">
                    <div class="center">
                        <span class="badge">${num}</span>
                    </div>
                    <div class="center">
                        <a href="#">
                            <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                        </a>
                    </div>
                    <div class="center">
                        <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                    </div>
                </div>
            </div>
            `
        );


    }

    function printThree(num, posicion) {
        $(`#${posicion}`).append(
            `
            <div class="col-xs-8 nada row">
                    <div class="col-xs-4">
                        <div class="center">
                            <span class="badge">${num}</span>
                        </div>
                        <div class="center">
                            <a href="#">
                                <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                            </a>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="center">
                            <span class="badge">${(num + 1)}</span>
                        </div>
                        <div class="center">
                            <a href="#">
                                <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                            </a>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal">
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="center">
                            <span class="badge">${(num + 2)}</span>
                        </div>
                        <div class="center">
                            <a href="#">
                                <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                            </a>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal" >
                        </div>
                    </div>
                </div>
            `
        );
    }

    //var btn = document.getElementById("myBtn");
    //var modal3 = document.getElementById('myModal');
    //var span = document.getElementsByClassName("close")[0];
    //btn.onclick = function () { modal3.style.display = "block"; }
    //span.onclick = function () { modal3.style.display = "none"; }


    var docsjuga = JSON.parse(localStorage.getItem("jugadores"));

    var paises = ["colombia","peru","brazil"]
	var cad = ""

	for (var i = Things.length - 1; i >= 0; i--) {
		Things[i]
	}

	for (var i = 0; i < paises.length; i++) {
		cad = cad + "<option value='"+i+"'>"+paises[i]+"</option>";
	}
	$("#sel1").html(cad);

});
