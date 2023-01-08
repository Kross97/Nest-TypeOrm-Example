import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../car/Car.entity";
import {Photo} from "../photo/Photo.entity";
import {RentCar} from "../many/RentCar.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;


    @OneToOne(() => Car, (car) => car.user)
    car: Car;

    @OneToMany(() => Photo, (photo) => photo.user)
    photos: Photo[];

    @OneToMany(() => RentCar, (rent) => rent.user)
    public rentToCar!: RentCar[];
}