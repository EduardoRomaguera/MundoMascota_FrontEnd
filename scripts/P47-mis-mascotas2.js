//Validación de espacios de inicio de sesión
  const btnEditar = document.querySelector('#btn-editar');
  const btnEditar2 = document.querySelector("#btn-editar2");

  const pendiente = () => {
    Swal.fire({
      imageUrl: "images/cute-pets.jpg",
      title: "Nuestro equipo aún está trabajando en eso",
      text: "Mientras tanto puedes ver esos lindos cachorros",
      confirmButtonText: "Regresar"
      });
    }

  const alerta = () => {
    Swal.fire({
      imageUrl: "images/cute-pets.jpg",
      title: "Nuestro equipo aún está trabajando en eso",
      text: "Mientras tanto puedes ver esos lindos cachorros",
      confirmButtonText: "Regresar"
      });
    }

  btnEditar.addEventListener('click', pendiente);
  btnEditar2.addEventListener('click', alerta);


