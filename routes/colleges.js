const express = require('express')
const { addCollege, updateCollege, getColleges, getCollege, getMyCollege, deleteCollege, filterColleges } = require('../controllers/colleges.js');


const router = express.Router();
router.post("/",  addCollege);
router.post("/", updateCollege);
router.get("/", getColleges);
router.get("/tasks", filterColleges);
router.get("/:id", getCollege);
router.post("/mycollege",  getMyCollege)
router.delete("/delete/:id",  deleteCollege);

module.exports = router;