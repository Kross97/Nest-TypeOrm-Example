import { DataSource } from 'typeorm';

const connectionSource = new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'Nik',
    password: '97',
    database: 'myDb',
    entities: ['*/**/*.entity.ts'],
    migrations: ['*/migrations/*.ts']
});

connectionSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default connectionSource;