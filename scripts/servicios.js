'use strict'

let listaRazas = [{
    'nombre': 'Pastor Alemán',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bulldog',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Golden Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Danés',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Poddle',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Persa',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Angora',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Bengala',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Maine Coon',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Criollo',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Siamés',
    'especie': 'Gato',
    'estado': 'Activo'
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
    'nombre': 'Asma felina',
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
    'nombre': 'Trifelina',
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
let listaUsuariosProveedores = [{
    'correo': 'proveedor@proveedor.com',
    'nombre': 'Pablo Monestel',
    'nacimiento': '10-12-1987',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'tipo': 'Proveedor'
}, {
    "correo": "alejandroproveedor@gmail.com",
    "nombre": "Alejandro Ortiz",
    "nacimiento": "29-01-1998",
    'sexo': 'Masculino',
    'contrasenna': 'abcd1254',
    'tipo': 'Proveedor'
}, {
    "correo": "josemendez@gmail.com",
    "nombre": "Jose Mendez",
    "nacimiento": "24-05-1995",
    'sexo': 'Masculino',
    'contrasenna': 'qwert124',
    'tipo': 'Proveedor'
}, {
    "correo": "miguelperez@puppyworld.com",
    "nombre": "Miguel Perez",
    "nacimiento": "15-07-2000",
    'sexo': 'Masculino',
    'contrasenna': 'proveedor445',
    'tipo': 'Proveedor'
}, {
    "correo": "Sammy12@outlook.com",
    "nombre": "Samantha Hernandez",
    "nacimiento": "21-04-1997",
    'sexo': 'Femenino',
    'contrasenna': 'sammy123',
    'tipo': 'Proveedor'
}, {
    "correo": "douglas78@hotmail.com",
    "nombre": "Jhonny Jimenez",
    "nacimiento": "01-07-1997",
    'sexo': 'Masculino',
    'contrasenna': 'rodri415',
    'tipo': 'Proveedor'
}, {
    "correo": "Glori@yahoo.com",
    "nombre": "Gloriana Morales",
    "nacimiento": "24-12-1992",
    'sexo': 'Femenino',
    'contrasenna': 'glorigirl48',
    'tipo': 'Proveedor'
}, {
    "correo": "steph45@proveedor.com",
    "nombre": "Stephan Ruiz",
    "nacimiento": "22-05-1992",
    'sexo': 'Masculino',
    'contrasenna': 'Steph48',
    'tipo': 'Proveedor'
}];

let listaUsuariosRechazados = [{
    'correo': 'julyy@proveedor.com',
    'nombre': 'Julio Iglesias',
    'nacimiento': '10-12-1987',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'enrique@gmail.com',
    'nombre': 'Enrique Garcia',
    'nacimiento': '11-12-1977',
    'sexo': 'Masculino',
    'contrasenna': '12q3',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': "julain@hotmail.com",
    'nombre': 'Byron Rodriguez',
    'nacimiento': '10-02-1998',
    'sexo': 'Masculino',
    'contrasenna': 'qwert3',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'bernies@projectx.com',
    'nombre': 'Bernie Ortiz',
    'nacimiento': '29-07-2001',
    'sexo': 'Masculino',
    'contrasenna': '112',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'Julissa2@proveedor.com',
    'nombre': 'Julissa Fonseca',
    'nacimiento': '08-08-1999',
    'sexo': 'Femenino',
    'contrasenna': '123233',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'richard@gmail.com',
    'nombre': 'Ricardo Gutierrez',
    'nacimiento': '11-12-2002',
    'sexo': 'Masculino',
    'contrasenna': 'qwert12',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'henry@decktech.com',
    'nombre': 'Henry Bejarano',
    'nacimiento': '10-03-1995',
    'sexo': 'Masculino',
    'contrasenna': 'raplife1010',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'guti12@yahoo.com',
    'nombre': 'Julian Gutierrez',
    'nacimiento': '14-02-1999',
    'sexo': 'Masculino',
    'contrasenna': 'gutiking101',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'josuecc@yahoo.com',
    'nombre': 'Josue Cascante',
    'nacimiento': '22-04-1989',
    'sexo': 'Masculino',
    'contrasenna': 'jouseccc',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'ronny12@proveedor.com',
    'nombre': 'Ronny Altamirano',
    'nacimiento': '10-12-1990',
    'sexo': 'Masculino',
    'contrasenna': 'ronnyxw',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, ];

let listaUsuariostotales = [{

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
    }, {
        'correo': 'proveedor@proveedor.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123',
        'tipo': 'Proveedor'
    }, {
        "correo": "alejandroproveedor@gmail.com",
        "nombre": "Alejandro Ortiz",
        "nacimiento": "29-01-1998",
        'sexo': 'Masculino',
        'contrasenna': 'abcd1254',
        'tipo': 'Proveedor'
    }, {
        "correo": "josemendez@gmail.com",
        "nombre": "Jose Mendez",
        "nacimiento": "24-05-1995",
        'sexo': 'Masculino',
        'contrasenna': 'qwert124',
        'tipo': 'Proveedor'
    }, {
        "correo": "miguelperez@puppyworld.com",
        "nombre": "Miguel Perez",
        "nacimiento": "15-07-2000",
        'sexo': 'Masculino',
        'contrasenna': 'proveedor445',
        'tipo': 'Proveedor'
    }, {
        "correo": "Sammy12@outlook.com",
        "nombre": "Samantha Hernandez",
        "nacimiento": "21-04-1997",
        'sexo': 'Femenino',
        'contrasenna': 'sammy123',
        'tipo': 'Proveedor'
    }, {
        "correo": "douglas78@hotmail.com",
        "nombre": "Jhonny Jimenez",
        "nacimiento": "01-07-1997",
        'sexo': 'Masculino',
        'contrasenna': 'rodri415',
        'tipo': 'Proveedor'
    }, {
        "correo": "Glori@yahoo.com",
        "nombre": "Gloriana Morales",
        "nacimiento": "24-12-1992",
        'sexo': 'Femenino',
        'contrasenna': 'glorigirl48',
        'tipo': 'Proveedor'
    }, {
        "correo": "steph45@proveedor.com",
        "nombre": "Stephan Ruiz",
        "nacimiento": "22-05-1992",
        'sexo': 'Masculino',
        'contrasenna': 'Steph48',
        'tipo': 'Proveedor'
    }, {
        'correo': 'gonza@gmail.com',
        'nombre': 'Gonzalo Nunez',
        'nacimiento': '03-11-1991',
        'sexo': 'Masculino',
        'contrasenna': 'ASDF12',
        'tipo': 'Cliente'
    }, {
        'correo': 'Rodri@outlook.com',
        'nombre': 'Rodrigo Arauz',
        'nacimiento': '04-11-1999',
        'sexo': 'Masculino',
        'contrasenna': 'xd249',
        'tipo': 'Cliente'
    }, {
        'correo': 'Busqets@gmail.com',
        'nombre': 'Sergio Sanchez',
        'nacimiento': '03-11-1998',
        'sexo': 'Masculino',
        'contrasenna': '1793qwert',
        'tipo': 'Cliente'
    }, {
        'correo': 'Amy@yahoo.com',
        'nombre': 'Amy Bosques',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123',
        'tipo': 'Cliente'
    }, {
        'correo': 'anderya@yahoo.com',
        'nombre': 'Andrey Lobo',
        'nacimiento': '04-11-2001',
        'sexo': 'Masculino',
        'contrasenna': 'pid78',
        'tipo': 'Cliente'
    }, {
        'correo': 'Nathaly@yahoo.com',
        'nombre': 'Nathalia Oconitrillo',
        'nacimiento': '04-01-1998',
        'sexo': 'Femenino',
        'contrasenna': 'ghost1111',
        'tipo': 'Cliente'
    },
];
let listaUsuariosPendientes = [{

}, {
    'correo': 'Christian@servipet.com',
    'nombre': 'Christian Víquez',
    'nacimiento': '03-11-1999',
    'sexo': 'Masculino',
    "estado": "Pendiente",

}, {
    'correo': 'Julio@yahoo.com',
    'nombre': 'Julio Nunez',
    'nacimiento': '03-12-2001',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'nyrontt@yahoo.com',
    'nombre': 'Nyron Salas',
    'nacimiento': '11-02-1998',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'jimena@gmail.com',
    'nombre': 'Jimena Arauz',
    'nacimiento': '12-08-2000',
    'sexo': 'Femenino',
    "estado": "Pendiente",
}, {
    'correo': 'andresc@yahoo.com',
    'nombre': 'Andres Ortiz',
    'nacimiento': '29-01-1997',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'jeremn@aol.com',
    'nombre': 'Jeremy Sancho',
    'nacimiento': '05-12-2001',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'fabrizzio@upet.com',
    'nombre': 'Fabrizzio Vargas',
    'nacimiento': '03-08-1994',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'Jeferg@aol.com',
    'nombre': 'Jefferson Victor',
    'nacimiento': '22-04-1994',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'Henry12@yahoo.com',
    'nombre': 'Henry Bejarano',
    'nacimiento': '07-07-1990',
    'sexo': 'Masculino',
    "estado": "Pendiente",
}, {
    'correo': 'andre333@gmail.com',
    'nombre': 'Andrea Blanco',
    'nacimiento': '12-05-1985',
    'sexo': 'Femenino',
    "estado": "Pendiente",
}, ];


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
                        window.location.href = 'P49-principal-administrador.html';
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