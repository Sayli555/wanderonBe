const { body, validationResult } = require('express-validator');

const registerValidationRules = () => [
    body('name')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
        .trim().escape(),
    body('email')
        .isEmail().withMessage('Must be a valid email')
        .normalizeEmail(),
        body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/\d/).withMessage('Password must contain at least one number')
        .matches(/[@$!%*?&#]/).withMessage('Password must contain at least one special character')
];


const loginValidationRules = () => [
    body('email')
        .isEmail().withMessage('Must be a valid email')
        .normalizeEmail(),
    body('password')
        .exists().withMessage('Password is required')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    registerValidationRules,
    loginValidationRules,
    validate
};
