'use strict';
//Validación de espacios de inicio de sesión
  const btnEditar = document.querySelector('#btn-editar');
  
  const pendiente = () => {
    Swal.fire({
      imageUrl: "images/cute-pets.jpg",
      title: "Nuestro equipo aún está trabajando en eso",
      text: "Mientras tanto puedes ver esos lindos cachorros",
      confirmButtonText: "Regresar"
      });
    }
  btnEditar.addEventListener('click', pendiente);


  if (sessionStorage.getItem('usuarioConectado')) {
    let usuario;
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    sessionStorage.getItem('usuarioConectado')
    switch (usuario.tipo) {
        case 'Proveedor':
            window.location.href = 'P20-perfil-proveedor.html';
            break;
        case 'Administrador':
            window.location.href = 'P49-principal-administrador.html';
            break;
    }
};
