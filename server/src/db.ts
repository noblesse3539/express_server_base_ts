import sequelize from 'sequelize';
const { Sequelize, Model, DataTypes } = sequelize;
import { sleep } from './utils/timer';
import fs from 'fs';
const fsPromises = fs.promises;

export async function dbInit() {
  const SECRET_PATH = '/run/secrets/mysql_secret';
  let password;
  try {
    password = await fsPromises.readFile(SECRET_PATH, 'utf8');
  } catch (err) {
    throw err;
    return;
  }
  const sequelize = new Sequelize('ketchupdb', 'root', password, {
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
