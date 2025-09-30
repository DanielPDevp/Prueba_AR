function abrir_modal_medicamentos(){    /* Funcion para abrir el modal de medicamnetos con js */
    event.preventDefault(); /* Evito que se recargue la pagina */
    let modal = new bootstrap.Modal(document.getElementById('modal_medicamentos')); /* Creo una nueva instancia de modal basado en mi id del modal en la vista y lo asigo a una variable */
    modal.show(); /* A la variable que tiene la instacia de mi modal le paso la funcion de mostrar */
}
document.getElementById("toggle-dark").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  
  // Cambia el texto del botón según el modo
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "☀️ Modo claro";
    this.classList.remove("btn-dark");
    this.classList.add("btn-light");
  } else {
    this.textContent = "🌙 Modo oscuro";
    this.classList.remove("btn-light");
    this.classList.add("btn-dark");
  }
});

function abrir_modal_salud(){    /* Funcion para abrir el modal de medicamnetos con js */
    event.preventDefault(); /* Evito que se recargue la pagina */
    let modal = new bootstrap.Modal(document.getElementById('modal_salud')); /* Creo una nueva instancia de modal basado en mi id del modal en la vista y lo asigo a una variable */
    modal.show(); /* A la variable que tiene la instacia de mi modal le paso la funcion de mostrar */
}
function abrir_modal_servicios(){    /* Funcion para abrir el modal de medicamnetos con js */
    event.preventDefault(); /* Evito que se recargue la pagina */
    let modal = new bootstrap.Modal(document.getElementById('modal_servicios')); /* Creo una nueva instancia de modal basado en mi id del modal en la vista y lo asigo a una variable */
    modal.show(); /* A la variable que tiene la instacia de mi modal le paso la funcion de mostrar */
}
function enviar_formulario() { /* Funcion para enviar los datos del formulario */
    let nombre = document.getElementById('nombre').value; /* Obtengo los valores y los asigno a una varible para hacer la validacion */
    let telefono = document.getElementById('telefono').value;
    let Email = document.getElementById('Email').value;
    let Edad = document.getElementById('Edad').value;
    let RH = document.getElementById('RH').value;
    let Eps = document.getElementById('Eps').value;

    if(nombre == '' || telefono == '' || Email == '' || Edad == '' || RH == '' || Eps == ''){ /* Valido si los valores estan vacios salga error de campo vacio */
        Swal.fire({
        icon: "error",
        title: "Cancelado...",
        text: "Error: Todos los campos deben ser obligatorios, valide!",
        
        });
        return;
    }
    else{ /* Si no estan vacios manda mensaje de exito */
        Swal.fire({
        icon: "success",
        title: "Guardado...",
        text: "Mensaje: Suscripción exitosa, verifique su correo!",
        });
    return;
    }

    
}
/* carousel servicio */
  const images = document.querySelectorAll('.carousel img');
  let posicion_servicio = 0;

  const showImage = index => {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  };

  document.getElementById('next').addEventListener('click', () => {
    posicion_servicio = (posicion_servicio + 1) % images.length;
    showImage(posicion_servicio);
  });

  document.getElementById('prev').addEventListener('click', () => {
    posicion_servicio = (posicion_servicio - 1 + images.length) % images.length;
    showImage(posicion_servicio);
  });

/*   carousel salud */
  const imagenes_salud = document.querySelectorAll('.carousel_salud img');
  let posicion_salud = 0;

  const verimagenes_salud = index => {
    imagenes_salud.forEach(img => img.classList.remove('active'));
    imagenes_salud[index].classList.add('active');
  };

  document.getElementById('siguiente_salud').addEventListener('click', () => {
    posicion_salud = (posicion_salud + 1) % imagenes_salud.length;
    verimagenes_salud(posicion_salud);
  });

  document.getElementById('anterior_salud').addEventListener('click', () => {
    posicion_salud = (posicion_salud - 1 + imagenes_salud.length) % imagenes_salud.length;
    verimagenes_salud(posicion_salud);
  });


/*   carousel medicamento */
  const imagenes_medicamento = document.querySelectorAll('.carousel_medicamento img');
  let posicion_medicamento = 0;

  const verimagenes_medicamento = index => {
    imagenes_medicamento.forEach(img => img.classList.remove('active'));
    imagenes_medicamento[index].classList.add('active');
  };

  document.getElementById('siguiente_medicamento').addEventListener('click', () => {
    posicion_medicamento = (posicion_medicamento + 1) % imagenes_medicamento.length;
    verimagenes_medicamento(posicion_medicamento);
  });

  document.getElementById('anterior_medicamento').addEventListener('click', () => {
    posicion_medicamento = (posicion_medicamento - 1 + imagenes_medicamento.length) % imagenes_medicamento.length;
    verimagenes_medicamento(posicion_medicamento);
  });

    const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("show"); // abre/cierra
});

