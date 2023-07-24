const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    collegeImage: String,
    collegeName: String,
    collegeRating: mongoose.Schema.Types.Mixed,
    admissionDates: Object,
    events: Array,
    researchHistory: String,
    sports: Array,
    numberOfResearches: Number,
});

const colleges = mongoose.model("College", collegeSchema);
module.exports = colleges;