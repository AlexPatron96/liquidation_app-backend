//si el token es valido deja pasar a la ruta


//si no es valido responde retorno 400 
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "");
    console.log(token);
    jwt.verify(
        token, 
        process.env.JWT_SECRET,
        {algorithm: "HS512" },
        (err , decoded) => {
            if (err) {
                res.status(400).json({error: "Invalid Token"});
            } else {
                console.log(decoded);
                next();
            }
        });
}

module.exports = authMiddleware; 