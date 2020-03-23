import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export function dbInit() {
  const sequelize = new Sequelize('ketchupdb', 'root', '0000', {
    host: '172.19.0.2',
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
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
