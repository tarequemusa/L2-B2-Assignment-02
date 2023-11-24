import Joi from 'Joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .message(
      'First Name must start with a capital letter and contain only alphabetic characters',
    ),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[a-zA-Z]+$/)
    .message('Last Name must contain only alphabetic characters'),
});

const userAddressValidationSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
});

const userOrdersValidationSchema = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required().trim().max(30),
  password: Joi.string().required(),
  fullName: userNameValidationSchema.required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string()).required(),
  address: userAddressValidationSchema.required(),
  orders: Joi.array().items(userOrdersValidationSchema).required(),
});

export default userValidationSchema;
