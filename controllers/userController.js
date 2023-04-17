const { User } = require('../models');

module.exports = {
    // Get all Users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
    // Create a new User
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
    },
    // Update existing user
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((users) =>
            !users
              ? res.status(404).json({ message: 'No user with that id!' })
              : res.json(users)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then(() => res.json({ message: 'User deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
    

   
    
}



