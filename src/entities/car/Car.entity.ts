import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from '../user/User.entity';
import {RentCar} from "../many/RentCar.entity";


@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mark: string;

    @Column()
    age: number;

    @OneToOne(() => User, (user) => user.car)
    @JoinColumn()
    user: User;

    @OneToMany(() => RentCar, (rent) => rent.car)
    public rentToUser!: RentCar[];
}