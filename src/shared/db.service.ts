import { Injectable } from "@nestjs/common"
import { Client } from 'pg'

@Injectable()
export class DatabaseService {

  private client;

  constructor() {
    this.client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'gestor-tareas',
        password: '12345',
        port: 5432,
    });
    this.client.connect()
  }

  public query(queryStr){
    
    return new Promise((resolve, reject) => {
      this.client.query(queryStr, (err, results) => {
        return(err) ? reject(err) : resolve(results)
      })
    })
  }
}