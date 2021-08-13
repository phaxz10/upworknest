import { Body, Controller, Get, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Password } from '../models/passwords.interface';
import { PasswordsService } from '../services/passwords.service';

@Controller('passwords')
export class PasswordsController {
  constructor(private passwordService: PasswordsService) {}

  @Post()
  create(@Body() password: Password): Observable<Password> {
    return this.passwordService.createPassword(password);
  }

  @Get()
  findAll(): Observable<Password[]> {
    return this.passwordService.findAllPassword();
  }
}
