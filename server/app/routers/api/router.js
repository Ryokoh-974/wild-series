const express = require("express");

const router = express.Router();

// eslint-disable-next-line import/newline-after-import
const { sayWelcome } = require("../../controllers/sayActions");
router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
