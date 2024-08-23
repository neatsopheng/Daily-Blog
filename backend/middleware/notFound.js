const notFoundHandler = (req, res, next) => {
    const error = "<h1>404 - Page not found</h1>";
    error.status = 400;
    return next(error);
}

module.exports = notFoundHandler;