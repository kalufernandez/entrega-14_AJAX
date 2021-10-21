const URL = "./variables.json"

$("body").prepend('<button id = "btn_mostrar" class="btn-success m-2">Mostrar</button>');

$("#btn_mostrar").click(() =>{
    $.ajax({
        method: "GET",
			url: URL,
			success: function (res) {
                for(const {id,nombre,stock} of res){
                    $(".row").append(
                        `<div class="card col-sm-3 ">
                            <div class="h3">${id}</div>
                            <div>Nombre: ${nombre}</div>
                            <div>Stock: ${stock}</div>
                            <div>GET exitoso</div>
                        </div>`
                        )};
			}
    })
})