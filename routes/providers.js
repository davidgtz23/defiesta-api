/** Providers routes **/

const router = require("express").Router();

const {
    getProviders,
    createProvider,
    updateProvider
} = require("../controllers/providers");

router.get("/", getProviders);
router.post("/", createProvider);
router.put("/:id", updateProvider);

module.exports = router;