import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
