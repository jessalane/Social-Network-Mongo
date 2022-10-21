const { User, Thought } = require('../models');

const userController = {
    // getting all users
    getUsers(req, res) {
        User.find()
        .select('-_v')
        .then((dbUserData) => {
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // getting single user by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-_v')
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(400).json({ message: 'There is no user with this ID!'});
            }
            res.json(dbUserData);
        })
    }
}