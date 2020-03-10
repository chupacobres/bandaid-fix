const router = require("express").Router();
const bandaidController = require("../../controllers/bandaidController");
// Matches with "/api/bands"
router.route("/")
  .get(bandaidController.findAll)
  .post(bandaidController.create);
// Matches with "/api/bands/:id"
router
  .route("/:id")
  .get(bandaidController.findById)
  .put(bandaidController.update)

router
  .get("/all/:search", function (req, res) {
    db.Band.find(
      { genre: req.params.search },
      (err, found) => err ? console.log(err) : res.json(found)
    );
  });

module.exports = router;