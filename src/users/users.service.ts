import { Inject, Injectable, NotFoundException } from '@nestjs/common';




@Injectable()
export class UsersService {
    
    constructor(@Inject('FILE_PATH') private readonly filePath: string) {}

    getAll() {
     return new Promise((resolve,reject)=>{
        const fs = require('fs')
        fs.readFile(this.filePath, 'utf8', (err, jsonString) =>{
            if(err) {
                console.log("File read failed:", err);
                return reject(new NotFoundException( 'Error reading file'));
            }
            const userData = JSON.parse(jsonString);
            resolve( userData)
        })
     })
}
    getByID(id:string){
        return new Promise((resolve,reject)=>{
            const fs = require('fs')
        fs.readFile(this.filePath, 'utf8', (err, jsonString) =>{
            if(err) {
                console.log("File read failed:", err);
                return reject(new NotFoundException( 'Error reading file'));
            }
            const userData = JSON.parse(jsonString);
            const user= userData.find((user: { id: string; })=> user.id==id)
            if(user){ resolve(user)}
            else{reject(new NotFoundException('User not found'))}
        })
            
    })
}
}
