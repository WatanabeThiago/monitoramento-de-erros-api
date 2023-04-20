import Error from '@modules/errors/infra/typeorm/entities/Error';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email?: string;

  @Column()
  profile_photo?: string;

  @Column()
  password?: string;

  @CreateDateColumn()
  created_at: Date;

  // ? Relations

  // @OneToMany(() => Error, error => error.product)
  // errors: Error[];
}

export default User;
