'use strict'

let listaRazas = [{
    'nombre': 'Pastor Alemán',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Bulldog',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Golden Retriever',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Gran Danés',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Poddle',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Persa',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Persa',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Bengala',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Maine Coon',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Criollo',
    'especie': 'Gato',
    'estado': 'Áctivo'
}]

let listaEnfermedades = [{
    'nombre': 'Moquillo',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Hepatitis canina',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Parvovirus',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Rabia',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Brucelosis',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Leucemia viral felina',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Asma felino',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Otitis externa',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Insuficiencia renal',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Toxoplasmosis',
    'especie': 'Gato',
    'estado': 'Áctivo'
}]

let listaVacunas = [{
    'nombre': 'Parvovirus',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Leptospirosis',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Rabia',
    'especie': 'Perro',
    'estado': 'Áctivo'
}, {
    'nombre': 'Leucemia felina',
    'especie': 'Gato',
    'estado': 'Áctivo'
}, {
    'nombre': 'Leucemia felina',
    'especie': 'Gato',
    'estado': 'Áctivo'
}]

// Lista de usuarios para probar inicio de sesión
let listaUsuarios = [{
    'correo': 'admin@admin.com',
    'nombre': 'Raúl Pérez',
    'nacimiento': '09-20-1973',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'tipo': 'Administrador'
}, {
    'correo': 'cliente@cliente.com',
    'nombre': 'Amanda Víquez',
    'nacimiento': '03-11-1991',
    'sexo': 'Femenino',
    'contrasenna': '123',
    'tipo': 'Cliente'
},
{
    'correo': 'proveedor@proveedor.com',
    'nombre': 'Pablo Monestel',
    'nacimiento': '10-12-1987',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'tipo': 'Proveedor'
},
{
    'correo': 'jose@gmail.com',
    'nombre': 'José Ramírez',
    'nacimiento': '03-11-1990',
    'sexo': 'Masculino',
    'contrasenna': '123Abc!',
    'tipo': 'Cliente'
}
];

//Codigo para validar la información de usuario y contraseña

const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Iniciando sesión'
        })
        //Codigo para redireccionar según el tipo de usuario correspondiente
        .then(() => {
            let usuario;
            sessionStorage.getItem('usuarioConectado')
            usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
                switch (usuario.tipo) {
                    case 'Administrador':
                        window.location.href = 'P29-principal-administrador.html';
                        break;
                    case 'Cliente':
                        window.location.href = 'P09-principal-cliente.html';
                        break;
                    case 'Proveedor':
                        window.location.href = 'P19-principal-proveedor.html';
                        break;
                }
        });
    } else {
        Swal.fire({
            imageUrl: "images/error2.jpg",
            title: "¡OOPS! Algo pasó aqui",
            text: "Usuario o contraseña incorrectos",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};