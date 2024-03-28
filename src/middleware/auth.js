const jwt = require("jsonwebtoken");
const secret_key = "geet";

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            const decodedToken = jwt.verify(token, secret_key);
            req.userID = decodedToken.id; // Assuming the token payload contains user ID
            next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(401).json({ message: "Authorization header missing" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"unauthorize user"})
    }
};

module.exports = auth;
