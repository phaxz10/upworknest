import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PasswordsEntity } from '../models/passwords.entity';
import { Password } from '../models/passwords.interface';

@Injectable()
export class PasswordsService {
  constructor(
    @InjectRepository(PasswordsEntity)
    private readonly passwordRepository: Repository<PasswordsEntity>,
  ) {}

  createPassword(password: Password): Observable<Password> {
    return from(this.passwordRepository.save(password));
  }

  findAllPassword(): Observable<Password[]> {
    return from(this.passwordRepository.find());
  }
}
