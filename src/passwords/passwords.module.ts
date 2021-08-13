import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordsController } from './controllers/passwords.controller';
import { PasswordsEntity } from './models/passwords.entity';
import { PasswordsService } from './services/passwords.service';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordsEntity])],
  providers: [PasswordsService],
  controllers: [PasswordsController],
})
export class PasswordsModule {}
