/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import mysql from 'mysql2';
import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import cors from 'cors';

import userlist from './userlist/router';
import collections from './collection/router';
import items from './item/router';
import { UserModel } from './userlist/user';
import { getUserlist } from './userlist/repository';
import { CollectionModel } from './collection/collection';
import { ItemModel } from './item/item';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexPath = path.join(__dirname, '../reactApp/app/');
const PORT = process.env.PORT || 4050;

app.use('/', express.static(indexPath));

app.use('/api/userlist', userlist);

app.use('/api/collections', collections);

app.use('/api/items', items);

const sequelize = new Sequelize(
  'heroku_afcfd845e4ef237',
  'b1265f0449a43c',
  '6e8be88a',
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

export const User = sequelize.define<UserModel>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
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

export const Collection = sequelize.define<CollectionModel>('collection', {
  userId: {
    type: DataTypes.INTEGER,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { type: DataTypes.TEXT },
  textField1Name: { type: DataTypes.STRING, defaultValue: '' },
  textField2Name: { type: DataTypes.STRING, defaultValue: '' },
  textField3Name: { type: DataTypes.STRING, defaultValue: '' },
  numberField1Name: { type: DataTypes.STRING, defaultValue: '' },
  numberField2Name: { type: DataTypes.STRING, defaultValue: '' },
  numberField3Name: { type: DataTypes.STRING, defaultValue: '' },
});

export const Item = sequelize.define<ItemModel>('item', {
  userId: {
    type: DataTypes.INTEGER,
  },
  collectionId: {
    type: DataTypes.INTEGER,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  textField1Value: { type: DataTypes.STRING },
  textField2Value: { type: DataTypes.STRING },
  textField3Value: { type: DataTypes.STRING },
  numberField1Value: { type: DataTypes.REAL },
  numberField2Value: { type: DataTypes.REAL },
  numberField3Value: { type: DataTypes.REAL },
});
