import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { InterfaceID } from "../../core/entities/General.model";

export interface IJwtPayloadAndUser extends JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  user?: IJwtPayloadAndUser;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.signedCookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "aaa") as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    return res.status(400).json({ message: "Error processing token" });
  }
};
