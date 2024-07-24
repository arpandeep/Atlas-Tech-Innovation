// import { Router } from 'express';
// import {
//   getUsers,
//   login,
//   register,
//   updateProfile,
//   updateStatus,
// } from '../controllers/user.js';
// import auth from '../middleware/auth.js';
// import checkAccess from '../middleware/checkAccess.js';
// import userPermissions from '../middleware/permissions/user/userPermissions.js';

// const userRouter = Router();
// userRouter.post('/register', register);
// userRouter.post('/login', login);
// userRouter.patch('/updateProfile', auth, updateProfile);
// userRouter.get('/', auth, checkAccess(userPermissions.listUsers), getUsers);
// userRouter.patch(
//   '/updateStatus/:userId',
//   auth,
//   checkAccess(userPermissions.updateStatus),
//   updateStatus
// );

// export default userRouter;

import { Router } from 'express';
import {
  getUsers,
  login,
  register,
  updateProfile,
  updateStatus,
} from '../controllers/user.js';
import auth from '../middleware/auth.js';
import checkAccess from '../middleware/checkAccess.js';
import userPermissions from '../middleware/permissions/user/userPermissions.js';
import User from '../models/User.js';

const userRouter = Router();

// Existing routes
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/updateProfile', auth, updateProfile);
userRouter.get('/', auth, checkAccess(userPermissions.listUsers), getUsers);
userRouter.patch(
  '/updateStatus/:userId',
  auth,
  checkAccess(userPermissions.updateStatus),
  updateStatus
);

// New route to fetch user details by UID
userRouter.get('/contact/:uid', async (req, res) => {
  try {
    const user = await User.findById(req.params.uid);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default userRouter;
