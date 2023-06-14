const User = require('../models/User');

const handleLogout = async (req, res) => {
    res.cookie('token', '').json('ok');
};

module.exports = { handleLogout };