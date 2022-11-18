import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;
  
//@Column()
  @ManyToOne(() => User, user => user.notes)
  @JoinColumn({name: 'UsEr'})
  user : User;
  
}
