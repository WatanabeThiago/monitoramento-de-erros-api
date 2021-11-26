import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('environments')
class Environment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Environment;
