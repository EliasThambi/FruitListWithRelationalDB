import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import { Note } from "src/notes/entities/note.entity";
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @OneToMany(type => Note, note => note.user)
  @JoinColumn({name: 'notes'})
  notes: Note[];

}
