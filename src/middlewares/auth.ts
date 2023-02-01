import { Request, Response, NextFunction } from "express";
import firebaseAdmin from "../config/firebase-config";

export function authMiddleware() {
  return async function (req: Request, res: Response, next: NextFunction) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const userInfo = await firebaseAdmin.auth().verifyIdToken(token);
        req.app.locals.userInfo = userInfo;
        return next();
      } catch (e) {
        return res
          .status(401)
          .send({ error: "You are not authorized to make this request" });
      }
    } else {
      return res.status(401).send({ error: "Missing authorization token" });
    }
  };
}
