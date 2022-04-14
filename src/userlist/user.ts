import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';
import sequelize from '../app';
import bcrypt from 'bcrypt';

export interface AuthUserInterface {
  login: string;
  password: string;
}
export interface UserInterface {
  id: number;
  login: string;
  blocked: boolean;
}

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  login: string;
  password: string;
  blocked: CreationOptional<boolean>;
}
// const User = sequelize.define<UserModel>(
//   'user',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     login: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     blocked: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (user) => {
//         if (user.password) {
//           const salt = await bcrypt.genSaltSync(10, 'a');
//           user.password = bcrypt.hashSync(user.password, salt);
//         }
//       },
//     },
//   }
// );

// export default User;
