const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return rej(err);

      if (user) return res(user);
    });
  });
};

const authenticate = async function (req, res, next) {
  let bearerToken =  req.headers['authorization'];
  const tokenFromCookie = req.cookies.token


  let token;

  if (bearerToken && (bearerToken.split(" ")[0] == "Bearer")) {
    token = bearerToken.split(" ")[1];
  } else if (tokenFromCookie) {
    token = tokenFromCookie;
  } else {
    return res.status(401).send({ status: "failed", message: "Invalid token format" });
  }




  let user;
  try {
    user = await verifyToken(token);
  } catch (error) {
    return res
      .status(400)
      .send({
        status: "failed",
        message: "Something went wrong",
        error: error,
      });
  }

  req.user = { user };

  next();
};

module.exports = authenticate;
