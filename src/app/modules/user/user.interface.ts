export type UserName = {
  firstName: 'string';
  lastName: 'string';
};

export type UserAddress = {
  street: 'string';
  city: 'string';
  country: 'string';
};

export type UserOrders = {
  productName?: string;
  price?: number;
  quantity?: number;
};

export type User = {
  userId: 'number';
  username: 'string';
  password: 'string';
  fullName: UserName;
  age: 'number';
  email: 'string';
  isActive: 'boolean';
  hobbies: ['string', 'string'];
  address: UserAddress;
  orders: [UserOrders];
};
