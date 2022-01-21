const middleware = (req, res, next)=>{
    console.log("I am the middleware!");
    next(); // Show with and without next();
}
module.exports = middleware;