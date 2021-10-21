//  DOC: https://api.jquery.com/jQuery.get/

//  Extension JSON viewer: https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

const URL = "https://jsonplaceholder.typicode.com";

$("body").prepend(
	'<div id="users" class="btn btn-success m-1">GET USERS</div>'
);

$("#users").click(() => {
	$.get(`${URL}/users`, function (res, state) {
		if (state === "success") {
			console.log(res);
			for (const { name, username, email } of res) {
				$(".row").append(`
                                <div class="card col-sm-3 m-1">
                                    <div class="h3">${name}</div>
                                    <div>Username: ${username}</div>
                                    <div>Email: ${email}</div>
                                </div>`);
			}
		}
	});
});

$("body").prepend(
	'<div id="photos" class="btn btn-success m-1">GET PHOTOS</div>'
);

$("#photos").click(() => {
	$.get(`${URL}/photos`, function (res, state) {
		if (state === "success") {
			for (const { albumId, title, thumbnailUrl } of res) {
				$(".row").append(`
                                <div class="card col-sm-3 m-2">
                                    <div class="h3">${albumId}</div>
                                    <div>Title: ${title}</div>
                                    <img src="${thumbnailUrl}" alt="">
                                </div>`);
			}
		}
	});
});

//  DOC: https://api.jquery.com/jQuery.post/

const infoPost = {
	nombre: "Ana",
	profesion: "Programadora",
};

$("body").prepend(
	'<button id="btn-post" class="btn btn-success m-1">POST</button>'
);

$("#btn-post").click(() => {
	$.post(`${URL}/posts`, infoPost, ({ nombre, profesion }, state) => {
		if (state === "success") {
			$(".row").append(
				`<div class="text-success h3">Guardado Exitoso: ${nombre}, ${profesion}</div>`
			);
		}
	});
});
