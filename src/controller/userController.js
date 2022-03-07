import User from '../model/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'lastname', 'email', 'cellphone'] });
      res.status(200).json(users);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {
        id, name, lastname, email, cellphone,
      } = user;
      res.status(200).json({
        id, name, lastname, email, cellphone,
      });
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(401).json('User does not exist');
      }

      const newUpdate = await user.update(req.body);
      const {
        id, name, lastname, email, cellphone,
      } = newUpdate;
      res.status(200).json({
        id, name, lastname, email, cellphone,
      });
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json('User does not exist');
      }

      await user.destroy();
      return res.status(200).json('User deleted!');
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

export default new UserController();
