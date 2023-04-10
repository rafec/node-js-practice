module.exports = (req, res, next) => {
    console.log(`The IP ${req.ip} accessed the route ${req.originalUrl}`);
    next();
};