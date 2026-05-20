export const YourMiddleware = (req, res, next) => {
    console.log("Your middleware checks or does something here...");
    next();
};
