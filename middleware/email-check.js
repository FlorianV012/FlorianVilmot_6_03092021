const emaildSchema = require('../models/email');

module.exports = (req, res, next) => {
    if (!emaildSchema.validate(req.body.email)) {
        res.status(400).json({ message: 'email invalide!' });
    } else {
        next();
    }
};