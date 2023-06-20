const express = require("express");
const update = require("../usecases/complement.usecase");
const router = express.Router();
const { auth } = require("../middlewares/auth.middleware");

router.patch("/:id", auth, async (req, res) => {
    try {
        const user = await update(req.params.id, req.body);
        res.json({
            success: true,
            data: user,
        });
    } catch (err) {
        res.status(err.status || 500).json({
            success: false,
            message: err.message,
    });
    }
});

module.exports = router;