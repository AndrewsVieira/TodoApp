const jwt = require('jsonwebtoken');

require('dotenv').config();

const auth = (req, res, next) => {
    var token = req.headers['authorization'];
    var msg_accessDenied = 'Access denied'

    if (!token) {
        return res.status(403).json({
            error: msg_accessDenied
        });
    }

    token = token.split(' ').pop();

    jwt.verify(token, process.env.SECRET, (error) => {
        if (error) {
            return res.status(403).json({
                error: msg_accessDenied
            });
        }
        next();
    });
}

module.exports = auth;