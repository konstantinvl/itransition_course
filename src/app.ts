/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import mysql from 'mysql2';
import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import cors from 'cors';

import userlist from './userlist/router';
import { UserModel } from './userlist/user';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexPath = path.join(__dirname, '../reactApp/app/');
const PORT = process.env.PORT || 4050;

app.use('/', express.static(indexPath));

app.use('/api/userlist', userlist);

const sequelize = new Sequelize(
  'heroku_4f8080834ef325f',
  'b341b2930338fd',
  '4906eda8',
  {
    dialect: 'mysql',
    host: 'us-cdbr-east-05.cleardb.net',
    define: {
      freezeTableName: true,
    },
  }
);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server started on localhost');
    });
  })
  .catch((err) => console.log(err));

const User = sequelize.define<UserModel>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
  }
);

export default User;
