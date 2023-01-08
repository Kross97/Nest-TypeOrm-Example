import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {User} from "../user/User.entity";


@Entity('photo_user_table')
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;

    @ManyToOne(() => User, (user) => user.photos)
    @JoinColumn()
    user: User;
}