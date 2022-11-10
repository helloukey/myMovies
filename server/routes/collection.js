const express = require('express');
const router = express.Router();
const { allCollection, addCollection, deleteCollection } = require("../controllers/collectionController");

// Get all collection
router.get("/collection", allCollection);

// Add collection
router.post("/collection", addCollection);

// Delete collection
router.delete("/collection/:id", deleteCollection);

module.exports = router;