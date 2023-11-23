import { Schema, model } from 'mongoose';
import { User, UserAddress, UserName, UserOrders } from './user.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String },
  lastName: { type: String },
});
const userAddressSchema = new Schema<UserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});
const userOrdersSchema = new Schema<UserOrders>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<User>({
  userId: Number,
  username: { type: String },
  password: { type: String },
  fullName: userNameSchema,
  age: Number,
  email: { type: String },
  isActive: ['true', 'false'],
  hobbies: [String, String],
  address: userAddressSchema,
  orders: [userOrdersSchema],
});

export const UserModel = model<User>('User', userSchema);
