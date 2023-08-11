const jwt = require('jsonwebtoken');

exports.verifyToken=async function (req, res, next) {
  //   const secretKey = "AjithDowc"; // Replace with your actual secret key
  const token = req.headers["authorization"];
  console.log("token",token)
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Token is missing or invalid" });
  }
  const bearerToken = token.slice(7);
  console.log("bearerToken",bearerToken)
  try {
    const decoded = jwt.verify(bearerToken, 'Ajith');
    // req.account = decoded;
    console.log("decoded",decoded)
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

