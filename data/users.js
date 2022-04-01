import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'John Doe',
    email: 'what@thedogdoin.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: bcrypt.hashSync('123456', 12),
  },
];

export default users;
