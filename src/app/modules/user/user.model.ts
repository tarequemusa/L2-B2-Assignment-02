import { Schema, model } from 'mongoose';
import { User, UserAddress, UserName, UserOrders } from './user.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'Name can not be more than 20 character'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is Required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const userAddressSchema = new Schema<UserAddress>({
  street: { type: String, required: [true, 'Street is required'] },
  city: { type: String, required: [true, 'City is required'] },
  country: { type: String, required: [true, 'Country is required'] },
});

const userOrdersSchema = new Schema<UserOrders>({
  productName: { type: String, required: [true, 'Product Name is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: [true, 'User ID is required'] },
  username: { type: String, required: [true, 'Username is required'] },
  password: { type: String, required: [true, 'Password is required'] },
  fullName: userNameSchema,
  age: { type: Number, required: [true, 'Age is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email address',
    },
  },
  isActive: {
    type: Boolean,
    required: [true, 'Active status is required'],
    enum: [true, false],
    default: true,
  },
  hobbies: { type: [String, String], required: [true, 'Hobbies are required'] },
  address: { type: userAddressSchema, required: [true, 'Address is required'] },
  orders: { type: [userOrdersSchema], required: [true, 'Orders are required'] },
});

export const UserModel = model<User>('User', userSchema);
