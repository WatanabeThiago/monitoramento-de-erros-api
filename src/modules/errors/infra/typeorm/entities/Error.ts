import Environment from '@modules/products/infra/typeorm/entities/Environment';
import Product from '@modules/products/infra/typeorm/entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
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

  @Column()
  url: string;

  @Column()
  code: number;

  @Column()
  method: string;

  @ManyToOne(() => Product, product => product.errors)
  @JoinColumn({ name: 'project_id' })
  product: Product;

  @ManyToOne(() => Environment, environment => environment.errors)
  @JoinColumn({ name: 'environment_id' })
  environment: Environment;

  @CreateDateColumn()
  created_at: Date;
}

export default Error;
