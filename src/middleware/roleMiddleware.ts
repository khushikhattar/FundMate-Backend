import { Request, Response, NextFunction } from "express";

const authorizeRoles = (...allowedRoles: Array<string>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: "Access Denied" });
      return;
    }
    next();
  };
};

export { authorizeRoles };
