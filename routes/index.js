// routing definitions are stored here //


const router = require("express").Router();
const weatherController = require("../controllers/weather.controller");

router.get("/", weatherController.weatherResultsPage);
router.get("/add", weatherController.addZip);
router.get("/search", weatherController.search);

module.exports = router;

