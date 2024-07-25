import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: { type: String, min: 2, max: 50, required: true },
    email: {
      type: String,
      min: 5,
      max: 50,
      required: true,
      unique: true,
      trim: true,
    },
    password: { type: String, required: true },
    photoURL: { type: String, default: '' },
    role: {
      type: 'String',
      default: 'admin',
      enum: ['basic', 'editor', 'admin'],
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.model('users', userSchema);
export default User;


// import mongoose from 'mongoose';

// const userSchema = mongoose.Schema(
//   {
//     name: { type: String, min: 2, max: 50, required: true },
//     email: {
//       type: String,
//       min: 5,
//       max: 50,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     password: { type: String, required: true },
//     photoURL: { type: String, default: '' },
//     role: {
//       type: 'String',
//       default: 'basic',
//       enum: ['basic', 'editor', 'admin'],
//     },
//     active: { type: Boolean, default: true },
//     uid: { type: String, required: true, unique: true }, // Ensure uid is included
//   },
//   { timestamps: true }
// );

// const User = mongoose.model('users', userSchema);
// export default User;
