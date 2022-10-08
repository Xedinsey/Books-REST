module.exports = {
    HOST: "46.138.247.190",
    USER: "max",
    PASSWORD: "Analitik123",
    DB: "postgres",
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:1000
    }
}