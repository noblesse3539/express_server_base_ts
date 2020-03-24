import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export function dbInit() {
  const sequelize = new Sequelize('ketchupdb', 'root', 'aaaa', {
    host: 'localhost',
    dialect: 'mysql',
    port: 33060,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 30000
    }
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully,');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}
