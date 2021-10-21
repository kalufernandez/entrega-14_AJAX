const URL_DOLAR = "https://criptoya.com/api/dolar"
const URL_CLIENTES = "./json/usuarios.json"

$("body").prepend('<button id="botonDolar" class="btn btn-success m-2">Cargar cotizacion Dolar</button>');
$("body").prepend('<button id="botonClientes" class="btn btn-success m-2">Cargar clientes</button>');

$("#botonDolar").click(() => {
    $.get(URL_DOLAR, function (res, state) {
        if (state === "success") {
            for (const dolar in res) {
                $(".row").append(`
                                <div class="card col-sm-3 m-1">
                                    <div class="h3">${dolar}</div>
                                    <div>$${res[dolar]}</div>
                                </div>`);
            }
        }
    });
});

$("#botonClientes").click(() => {
    $.get(URL_CLIENTES, function (res, state) {
        if (state == "success") {
            res.forEach(dato => {
                $(".row").append(`
                                <div class="card col-sm-3 m-1">
                                    <div class="h3">${dato.id}</div>
                                    <div>Nombre: ${dato.name}</div>
                                    <div>Email: ${dato.email}</div>
                                    <div>Telefono: ${dato.phone}</div>
                                    <div>Codigo Postal: ${dato.address.zipcode}</div>
                                </div>`);
            })
        }
    });
});

// https://github.com/public-apis/public-apis