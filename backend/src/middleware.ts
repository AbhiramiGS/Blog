import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  userId?: string;
}

function verifyToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Access denied" });
    return; // Explicitly return to satisfy TypeScript
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET ?? "") as {
      userId: string;
    };
    req.userId = decoded.userId;
    next(); // Pass control to the next middleware
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
    return; // Explicitly return to satisfy TypeScript
  }
}

export default verifyToken;

