import {Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm";
import {User} from "../user/User.entity";
import {Car} from "../car/Car.entity";


@Entity('rent_car_user_table')
export class RentCar {
  @PrimaryGeneratedColumn()
  public rentId!: number;

  @CreateDateColumn()
  public dateCreated!: number;

    @ManyToOne(() => User, (user) => user.rentToCar)
    public user!: User

    @ManyToOne(() => Car, (car) => car.rentToUser)
    public car!: Car
}