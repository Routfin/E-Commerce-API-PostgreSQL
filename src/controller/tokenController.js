import jwt from 'jsonwebtoken';

import User from '../model/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json('Invalid Credentials');
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json('User does not exists');
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json('Invalid password');
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ token });
  }
}

export default new TokenController();
