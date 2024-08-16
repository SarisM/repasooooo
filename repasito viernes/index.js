// Reto de buscar propiedad máxima:
// Crea una función que tome un array de objetos, donde cada
// objeto representa un producto con propiedades "nombre" y "precio".
//  función debe devolver el objeto del producto con el precio más alto.

// Reto de transformar propiedades:
// Crea una función que tome un array de objetos, donde cada objeto representa
// un estudiante con propiedades "nombre" y "calificación". La función debe devolver
//  un nuevo array donde cada objeto tenga una propiedad adicional "aprobado" que sea
//  true si la calificación es mayor o igual a 60, y false en caso contrario.

const estudiantes = [
  { nombre: "juan", calificacion: 55 },
  { nombre: "daniel", calificacion: 65 },
  { nombre: "camilo", calificacion: 70 },
  { nombre: "david", calificacion: 45 },
  { nombre: "santiago", calificacion: 85 },
];

const evaluarEstudiantes = (estudiantes) => {
  estudiantes.forEach((element) => {
    if (element.grade >= 60) {
      element.aprobado = true;
    } else {
      element.aprobado = false;
    }
  });
  return estudiantes;
};

console.log(evaluarEstudiantes(estudiantes));

// Reto de buscar propiedad máxima:
// Crea una función que tome un array de objetos, donde cada objeto representa
// un producto con propiedades "nombre" y "precio". La función debe devolver el
// objeto del producto con el precio más alto.

const verduras = [
  { nombre: "tomate", precio: 2 },
  { nombre: "brocoli", precio: 3 },
  { nombre: "lechuga", precio: 5 },
  { nombre: "remolacha", precio: 1 },
  { nombre: "zanahora", precio: 2 },
];

const verduraMasCara = (verduras) => {
  let max = verduras[0];
  verduras.forEach((verdura) => {
    if (verdura.precio > max.precio) {
        max = verdura
    }
  });
  return max;
};

const verduramaxima = verduraMasCara(verduras);
console.log(verduramaxima)


// Reto de eliminar propiedad:
// Crea una función que tome un array de objetos, donde cada objeto 
//  un estudiante con propiedades "nombre" y "calificación". La función debe
//   devolver un nuevo array de objetos donde cada objeto solo tenga la propiedad "nombre".

const niños = [
    { nombre: "juan", calificacion: 55 },
    { nombre: "daniel", calificacion: 65 },
    { nombre: "camilo", calificacion: 70 },
    { nombre: "david", calificacion: 45 },
    { nombre: "santiago", calificacion: 85 },
  ];

  const soloNombres = (niños) => {
    niños.forEach ((element) => {
        delete element.calificacion
    })
    return niños
  }
  console.log(soloNombres(niños))



// Crea una función que tome un array de objetos, donde cada objeto representa un 
// empleado con propiedades "nombre", "edad" y "departamento". La función debe devolver 
// un nuevo array con los empleados que trabajan en el departamento "Ventas".


const empleados = [
    { nombre: "sara", edad : 12, departamento: "ventas"},
    { nombre: "juan", edad : 12, departamento: "diseño"},
    { nombre: "daniel", edad : 12, departamento: "ventas"},
    { nombre: "diego", edad : 12, departamento: "diesño"},
    { nombre: "laura", edad : 12, departamento: "ventas"}

];


const empleadosDeVentas = empleados.filter (empleado => empleado.departamento === "ventas");
console.log(empleadosDeVentas)
   


// Crea una función que tome un array de objetos, donde cada objeto
// representa una venta con propiedades "producto" y "cantidad". 
// La función debe devolver un objeto que cuente la cantidad total de cada producto vendido.

// const maquillaje = [
//     {producto: "labial", cantidad: 2},
//     {producto: "base", cantidad: 30},
//     {producto: "labial", cantidad: 4},
//     {producto: "polvos", cantidad: 22},
//     {producto: "base", cantidad: 12}
// ]

// function Total 

const ventas = [
    { producto: "camisa", cantidad: 2 },
    { producto: "pantalón", cantidad: 1 },
    { producto: "camisa", cantidad: 3 },
    { producto: "zapatos", cantidad: 1 },
  ];
  
  function contarCantidades(ventas) {
    const acumulador = {};
  
    ventas.forEach(venta => {
      if (acumulador[venta.producto]) {
        acumulador[venta.producto] += venta.cantidad;
      } else {
        acumulador[venta.producto] = venta.cantidad;
      }
    });
  
    return acumulador;
  }
  
  const cantidadesTotales = contarCantidades(ventas);
  console.log(cantidadesTotales);
  





  
  
  const tareas = [
    { id: 1, descripcion: "historia", estado: "completada"},
    { id: 2, descripcion: "historia", estado: "completada"},
    { id: 3, descripcion: "historia", estado: "pendiente"},
    { id: 4, descripcion: "historia", estado: "pendiente"},
    { id: 5, descripcion: "historia", estado: "completada"},
];




function estado(tareas) {

  let newarray = [];

  tareas.forEach((element) => {
      if (  (element.id % 2 !== 0)) {
          element.estado = 'completada'
          newarray.push(element);

      }
     
  })

  return newarray;
}

estado(tareas)

console.log(estado(tareas));