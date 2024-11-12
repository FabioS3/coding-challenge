import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller({path:'users',
    version:'1'
}
)
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(){
        return this.usersService.getAll()
    }

    @Get(':id')
        getUsers(@Param('id') id: string) {
         return this.usersService.getByID(id)
    }
}


