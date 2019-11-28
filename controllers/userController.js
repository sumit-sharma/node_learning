var User = require('../models/users');


exports.user_list = (req, res) => {
    User
        .find()
        .select('name email')
        .exec(function (err, users) {
            res.send(users);
        });
}


exports.user_store = function (req, res) {
    // console.log(req.body.name);
    // return;
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });
    res.send('data has been saved');
};

exports.user_update = function (req, res) {
    User.findById(req.params.userId)
        .update({ name: req.body.newName })
        .exec((err, users) => {
            res.send(users);
        })

};

exports.user_delete = function (req, res) {
    User
    .findByIdAndDelete(req.params.userId)
    .exec((err, users) => {
        res.send(users);
    })
}


