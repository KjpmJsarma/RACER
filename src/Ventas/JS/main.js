export const datos = [
  {
    valor: '$1000',
    estado: 'Exitoso',
    descripcion: 'Venta de producto',
    cliente: 'cliente@example.com',
    fecha: '2022-08-09',
  },
  {
    valor: '$2000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente2@example.com',
    fecha: '2022-08-10',
  },
  {
    valor: '$3000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente3@example.com',
    fecha: '2022-08-11',
  },
  {
    valor: '$4000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente4@example.com',
    fecha: '2022-08-12',
  },
  {
    valor: '$5000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente5@example.com',
    fecha: '2022-08-13',
  },
  {
    valor: '$6000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente6@example.com',
    fecha: '2022-08-14',
  },
  {
    valor: '$7000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente7@example.com',
    fecha: '2022-08-15',
  },
  {
    valor: '$8000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente8@example.com',
    fecha: '2022-08-16',
  },
  {
    valor: '$9000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente9@example.com',
    fecha: '2022-08-17',
  },
  {
    valor: '$10000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente10@example.com',
    fecha: '2022-08-18',
  },
  {
    valor: '$11000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente11@example.com',
    fecha: '2022-08-19',
  },
  {
    valor: '$12000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente12@example.com',
    fecha: '2022-08-20',
  },
  {
    valor: '$13000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente13@example.com',
    fecha: '2022-08-21',
  },
  {
    valor: '$14000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente14@example.com',
    fecha: '2022-08-22',
  },
  {
    valor: '$15000',
    estado: 'Fallido',
    descripcion: 'Venta de producto',
    cliente: 'cliente15@example.com',
    fecha: '2022-08-23',
  },
  {
    valor: '$16000',
    estado: 'Exitoso',
    descripcion: 'Venta de servicio',
    cliente: 'cliente16@example.com',
    fecha: '2022-08-24',
  },
];

const filasPorPagina = 8;
let paginaActual = 1;

function mostrarTabla(pagina) {
  const tabla = document.querySelector('.tabla-datos tbody');
  const inicio = (pagina - 1) * filasPorPagina;
  const fin = inicio + filasPorPagina;
  const datosPagina = datos.slice(inicio, fin);

  // Limpia la tabla existente
  tabla.innerHTML = '';

  // Añade nuevas filas a la tabla
  datosPagina.forEach((dato) => {
    const fila = document.createElement('tr');
    fila.className = 'bg-white border-b';

    Object.values(dato).forEach((valor) => {
      const celda = document.createElement('td');
      celda.textContent = valor;
      celda.className = 'py-4 px-6';
      fila.appendChild(celda);
    });

    tabla.appendChild(fila);
  });

  // Actualiza la paginación
  actualizarPaginacion(pagina);
}

function actualizarPaginacion(paginaActual) {
  const numeroPaginas = Math.ceil(datos.length / filasPorPagina);
  const paginacion = document.getElementById('paginacion');

  // Limpia los botones de paginación existentes
  paginacion.innerHTML = '';

  // Añade nuevos botones de paginación
  for (let i = 1; i <= numeroPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    boton.className =
      'px-3 py-1 border border-gray-300 rounded hover:bg-gray-200';
    if (i === paginaActual) {
      boton.className += ' bg-gray-200';
    }
    boton.addEventListener('click', () => mostrarTabla(i));
    paginacion.appendChild(boton);
  }
}

// Muestra la primera página al cargar la página
mostrarTabla(paginaActual);
