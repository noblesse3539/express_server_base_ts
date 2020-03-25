import sequelize from 'sequelize';
const { Sequelize, Model, DataTypes } = sequelize;
import { sleep } from './utils/timer';

export async function dbInit() {
  const sequelize = new Sequelize('ketchupdb', 'root', '0000', {
    host: 'db',
    dialect: 'mysql',
    port: 3306
  });

  for (let i = 1; i < 6; i++) {
    try {
      console.log(`connect DB... cnt: ${i}`);
      await sequelize.authenticate();
      console.log('Connection has been established successfully,');
      return;
    } catch (err) {
      if (i == 5) {
        throw err;
      }
      await sleep(5000);
    }
  }
}
