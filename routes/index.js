  
/** All routes **/

const router = require("express").Router();
const usersRoutes = require("./users");
const providersRoutes = require("./providers")

router.use("/users", usersRoutes);
router.use("/providers", providersRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome to defiesta API");
});

module.exports = router;