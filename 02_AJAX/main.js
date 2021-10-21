//  https://api.jquery.com/Jquery.ajax/

$(document).ready(function () {
	const APIURL = "https://jsonplaceholder.typicode.com/posts";

	$("body").prepend(
		'<button id="get" class="btn btn-success m-2">ENVIAR PETICION GET</button>'
	);

	$("#get").click(() => {
		$.ajax({
			method: "GET",
			url: APIURL,
			success: function (res) {
				for (const { id, title, body } of res) {
					$(".row").append(`
                                    <div class="card col-sm-3 m-2">
                                        <div class="h3">${id}</div>
                                        <div>Title: ${title}</div>
                                        <div>Body: ${body}</div>
                                    </div>`);
				}
			},
		});
	});

	const infoPost = {
		nombre: "Ana",
		profesion: "Programadora",
	};

	$("body").prepend(
		'<button id="post" class="btn btn-success m-2">ENVIAR PETICION POST</button>'
	);

	$("#post").click(() => {
		$.ajax({
			method: "POST",
			url: APIURL,
			data: infoPost,
			success: function (res) {
				$(".row").append(
					`<div class="text-success h3">Guardado Exitoso: ${res.nombre}, ${res.profesion}</div>`
				);
			},
		});
	});
});
