//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const objetoPersona = { nombre: "Juan", mail: "juan@juan.com", colorEnHexadecimalFavorito: "#333" };

function imprimirDatosPersona({ nombre, mail }) {

    console.log(nombre, mail);

}

const { nombre, mail } = objetoPersona

console.log(nombre, mail);

/* imprimirDatosPersona(objetoPersona); */