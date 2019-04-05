import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../shared/db.service'

@Injectable()
export class TareaService {

    constructor(private db: DatabaseService) {
    }

    getAll() {
        return this.db.query('SELECT * from tarea')
            .then((data: any) => {
                return { state: "OK", payload: data.rows };
            })
            .catch(err => {
                if (err.code == "42601") return { state: "ERROR", type: "ERROR_SERVER", description: "Error en el servidor" };
            });
    }

    get(id: number) {
        return this.db.query(`SELECT * from tarea where id = ${id}`)
            .then((data: any) => {
                return { state: "OK", payload: data.rows };
            })
            .catch(err => {
                if (err.code == "42601") return { state: "ERROR", type: "ERROR_SERVER", description: "Error en el servidor" };
            });
    }

    createTask(task: any) {
        return this.db.query(`
        INSERT INTO tarea 
        (asunto, descripcion, estado,fk_persona) 
        VALUES 
        ('${task.subject}', '${task.description}',${task.state}, 
        (SELECT id FROM persona where cedula = '${task.nombre}' ))`)
            .then(async (data: any) => {
                let id: any = await this.db.query(`SELECT currval(pg_get_serial_sequence('tarea','id')) as id`);
                return  { state: "OK", payload: id.rows[0].id };
            })
            .catch(err => {
                console.log("error: "+err);
                
                if (err.code == "42601") return { state: "ERROR", type: "ERROR_SERVER", description: "Error en el servidor" };
            });
    }

    deleteTask(id:number) {
        return this.db.query(`DELETE FROM tarea where id = ${id}`)
            .then((data: any) => {
                return { state: 'OK' };  
            })
            .catch(err => {
                if (err.code == "42601") return { state: "ERROR", type: "ERROR_SERVER", description: "Error en el servidor" };
            });
    }
}