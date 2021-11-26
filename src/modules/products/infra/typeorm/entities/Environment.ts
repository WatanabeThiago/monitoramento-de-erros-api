import Error from '@modules/errors/infra/typeorm/entities/Error';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('environments')
class Environment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Error, error => error.environment)
  errors: Error[];

  @CreateDateColumn()
  created_at: Date;
}

export default Environment;
