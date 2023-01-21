const Tarea = require("./tarea");

/**
 * _listado:
 *  { 'uuid-1234712-123123-2: { id:12, desc: asd, completadoEn:92231}'}
 */
class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc= '' ) {

        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {

        console.log(); // Espacio separador
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn} = tarea;

            const estado = (completadoEn ) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);

        })
    }
}

module.exports = Tareas;