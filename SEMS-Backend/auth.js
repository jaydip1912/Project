const jwt = require("jsonwebtoken");
const jwtSecret = "jwttoken";
const t = jwt.sign({ id: 1234567890 }, jwtSecret, { expiresIn: "1200s" });
console.log("token:", t);

const verifyToken = async (req, res, next) => {
  if (req.headers.authorization) {
    var authorization = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(authorization, jwtSecret);
      req.user = decoded; // Attach the decoded token to the request object
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(401).json({ message: "Invalid token" });
    }
    return next();
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

module.exports = verifyToken;
