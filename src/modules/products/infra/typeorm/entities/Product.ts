import Error from '@modules/errors/infra/typeorm/entities/Error';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Error, error => error.product)
  errors: Error[];

  @CreateDateColumn()
  created_at: Date;
}

export default Product;
