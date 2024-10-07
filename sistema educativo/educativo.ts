// Clase Alumno
class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Método para saber si el alumno está aprobado
    estaAprobado() {
        return this.nota >= 7;
    }

    // Método para obtener la información del alumno
    obtenerInfo() {
        const estado = this.estaAprobado() ? 'aprobado' : 'reprobado';
        return `${this.nombre}: Nota = ${this.nota}, Estado = ${estado}`;
    }
}

// Clase Profesor
class Profesor {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    // Método para añadir un alumno al listado del profesor
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para eliminar un alumno del listado
    eliminarAlumno(nombreAlumno) {
        this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombreAlumno);
    }

    // Método para obtener el listado de los alumnos
    obtenerListadoAlumnos() {
        return this.alumnos.map(alumno => alumno.obtenerInfo()).join('\n');
    }
}

// Clase Escuela
class Escuela {
    constructor() {
        this.alumnos = [];
        this.profesores = [];
    }

    // Método para matricular un alumno en la escuela
    matricularAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para contratar un profesor en la escuela
    contratarProfesor(profesor) {
        this.profesores.push(profesor);
    }

    // Método para expulsar un alumno de la escuela
    expulsarAlumno(nombreAlumno) {
        this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombreAlumno);
        // También se elimina de los listados de los profesores
        this.profesores.forEach(profesor => profesor.eliminarAlumno(nombreAlumno));
    }

    // Método para despedir un profesor de la escuela
    despedirProfesor(nombreProfesor) {
        this.profesores = this.profesores.filter(profesor => profesor.nombre !== nombreProfesor);
    }

    // Método para obtener el listado de los alumnos
    obtenerListadoAlumnos() {
        return this.alumnos.map(alumno => alumno.obtenerInfo()).join('\n');
    }

    // Método para obtener el listado de los profesores
    obtenerListadoProfesores() {
        return this.profesores.map(profesor => profesor.nombre).join(', ');
    }
}

// Ejemplo de uso

// Crear una nueva escuela
const escuela = new Escuela();

// Crear algunos alumnos
const alumno1 = new Alumno('Juan', 8);
const alumno2 = new Alumno('Ana', 6);
const alumno3 = new Alumno('Carlos', 9);

// Matricular los alumnos en la escuela
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);

// Crear un profesor
const profesor1 = new Profesor('Profesor González');

// Contratar el profesor en la escuela
escuela.contratarProfesor(profesor1);

// Agregar alumnos al listado del profesor
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);

// Mostrar el listado de alumnos de la escuela
console.log('Alumnos en la escuela:');
console.log(escuela.obtenerListadoAlumnos());

// Mostrar el listado de alumnos del profesor
console.log('\nAlumnos del Profesor González:');
console.log(profesor1.obtenerListadoAlumnos());

// Expulsar un alumno de la escuela
escuela.expulsarAlumno('Ana');

// Mostrar el listado actualizado de alumnos de la escuela
console.log('\nAlumnos en la escuela después de expulsar a Ana:');
console.log(escuela.obtenerListadoAlumnos());
