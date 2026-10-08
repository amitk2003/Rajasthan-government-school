import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwt_secret = process.env.JWT_SECRET || "Gss_school_peth";

// Middleware to authenticate JWT Bearer Token
export const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication Token Required" });
  }

  jwt.verify(token, jwt_secret, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ message: "Token invalid or expired. Please log in again." });
    }
    req.user = decodedUser;
    next();
  });
};

// Role-Based Access Control (RBAC) Guard Middleware (Point 2)
export const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "User identity unauthenticated" });
    }

    const userRole = req.user.role || (req.user.authClaims && req.user.authClaims[1]?.role);

    if (!userRole || (!allowedRoles.includes(userRole) && userRole !== "admin")) {
      return res.status(403).json({
        message: `Forbidden: Access restricted. Role '${userRole || "unknown"}' lacks permission.`,
        requiredRoles: allowedRoles,
      });
    }

    next();
  };
};

export default authToken;