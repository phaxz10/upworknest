import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('password_list')
export class PasswordsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
