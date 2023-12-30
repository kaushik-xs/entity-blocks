// Update multiple buisiness entities in the same payload
var express = require("express");
var router = express.Router();
0;
/* GET home page. */
router.get("/health_check", function (req: any, res: any, next: any) {
  res.send("The service is up");
});

module.exports = router;
