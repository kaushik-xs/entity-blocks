// Update multiple buisiness entities in the same payload
import express, { Express, Request, Response, NextFunction } from "express";
var router = express.Router();
0;
/* GET home page. */
router.get(
  "/health_check",
  function (req: Request, res: Response, next: NextFunction) {
    res.send("The service is up");
  }
);

module.exports = router;
