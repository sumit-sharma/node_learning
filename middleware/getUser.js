var mongoose = require('../db');
var User = require('../models/users');


async function getUser(req, res, next) {
    try {
        var id = mongoose.Types.ObjectId.createFromHexString(req.params.userId);
        user = await User.findById(id);
        if (user == null || user.length == 0) {
            return res.status(404).json({ message: "can't find user" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user;
    next();
}

module.exports = getUser;