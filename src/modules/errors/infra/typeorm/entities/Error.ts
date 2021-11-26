import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('errors')
class Error {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  environment_id: number;

  @Column()
  project_id: number;

  @Column()
  body?: string;

  @Column()
  message?: string;

  @Column()
  ip?: string;

  @Column()
  params?: string;

  @Column()
  query?: string;

  @Column()
  headers?: string;

  @Column()
  user?: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Error;
