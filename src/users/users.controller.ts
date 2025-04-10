import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { posix } from 'node:path/win32';

@Controller('users')
export class UsersController {

    @Get()
    findAll(){
        return []
    }

    @Get(':id')
    findOne(@Param("id") id:string ){
        return {id}
    }

    @Post()
    create(@Body() user : {}){
         return user
    }
    
}
