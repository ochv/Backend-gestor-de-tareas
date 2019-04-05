import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../shared/db.service'

@Injectable()
export class PersonaService {

    constructor(private db: DatabaseService) {
    }

    getAllPerson() {
        return this.db.query('SELECT * from persona')
    
            .then((data: any) => {
               
                return { state: "OK", payload: data.rows };
            })
            .catch(err => {
                if (err.code == "42601") return { state: "ERROR", type: "ERROR_SERVER", description: "Error en el servidor" };
            });
    }

}