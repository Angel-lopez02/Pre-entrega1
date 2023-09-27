let nombre = prompt('Bienvenido/a Ingresa tu nombre');
alert('Hola ' + nombre + ' aqui te mostraremos algunas acciones en las cuales puedes invertir');
alert('Primero Necesitaremos que te registres');
let respuestaSi = 'si';

function registro() {
    let registroExitoso = false;
    let intentos = 100;
    for (let i = intentos; i > 0; i--) {
        let nombreUsuario = prompt('Ingresa tu nuevo nombre de usuario');
        let consulta = prompt('tu nombre de usuario es ' + nombreUsuario + ' si es correcto pon si de lo contrario pon que no para volver a ingresarlo');
        if (consulta === respuestaSi) {
            alert('tu Nombre de usuario a sido guardado con exito');
            break;
        } else {
            alert('vuelve a ingresar tu nombre de usuario');
        }
    }
    for (let i = intentos; i > 0; i--) {
        let contrasena = prompt('ingresa tu contraseña');
        let consultaContrasena = prompt('tu contraseña es ' + contrasena + ' si es correcta pon si de la contrario pon no');
        if (consultaContrasena === respuestaSi) {
            alert('tu contraseña a sido guardada con exito');
            alert('has ingresado con exito te mostraremos recomendaciones de algunas acciones en las que puedes invertir')
            registroExitoso = true;
            break;
        } else {
            alert('vuelve a ingresar tu contraseña');
        }
    }

    return registroExitoso;
}
if (registro()) {
    let cocacola = 8767;
    let tesla = 12636;
    let mercadoLibre = 16410;
    let opcion = prompt('Elige una de las acciones que mas te guste para comprar: \n1- Mercado Libre. \n2 - CocaCola. \n3 - Tesla. \nPresioná X si no quieres comprar ninguna.');
    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                let accionesMl = parseInt(prompt('Mercado libre tiene un precio por accion de ' + mercadoLibre + ' cuantas acciones quieres comprar'));
                let resultado = mercadoLibre * accionesMl;
                alert('compraste ' + accionesMl + ' acciones de Mercado libre que equivalen a ' + resultado + ' felicitaciones!!')
                break;
            case '2':
                let accionesCo = parseInt(prompt('CocaCola tiene un precio por accion de ' + cocacola + ' cuantas acciones quieres comprar'));
                let resultadoCo = cocacola * accionesCo;
                alert('compraste ' + accionesCo + ' acciones de CocaCola que equivalen a ' + resultadoCo + ' felicitaciones!!')
                break;

            case '3':
                let accionesTs = parseInt(prompt('Tesla tiene un precio por accion de ' + tesla + ' cuantas acciones quieres comprar'));
                let resultadoTs = tesla * accionesTs;
                alert('compraste ' + accionesTs + ' acciones de Tesla que equivalen a ' + resultadoTs + ' felicitaciones!!')
                break;

            default:
                alert('opcion ivalida');
                break;
        }
        opcion = prompt('Elegí una opción: \n1- Mercado libre. \n2 - CocaCola. \n3 - Tesla. \n Presiona X si no quieres comprar ninguna.');
    }
} else {
    alert('erro de registro');
}

alert('Gracias por elegirnos esperamos que sigas comprando!!!');