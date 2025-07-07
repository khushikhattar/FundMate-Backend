import { Request, Response, NextFunction } from "express";

const authorizeRoles = (...allowedRoles: Array<string>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};

export { authorizeRoles };
