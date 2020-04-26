let estudiantes = [{
        nombre: 'Alvaro',
        promedio: 9,
        curso: 'Android',
    },
    {
        nombre: 'Daniel',
        promedio: 6,
        curso: 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio: 3,
        curso: 'iOS',
    }
]

let alumno1 = { nombre: 'Mariana', promedio: 9, curso: 'Full Stack' };
let alumno2 = { nombre: 'Francisco', promedio: 2, curso: 'Android' };

estudiantes.unshift(alumno1);
estudiantes.unshift(alumno2);

console.log(estudiantes);