const college = require("../models/colleges.js")


const addCollege = async (req, res) => {
    console.log("hmm")
    const ress = college(req.body);
    // console.log(req.body)
    try {
        await ress.save();
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const updateCollege = async (req, res) => {
    const us = req.body;
    const id = us._id
    var query = { '_id': id };
    const newCollege = college(us);

    try {
        await college.findOneAndUpdate(query, newCollege, { upsert: true });
        res.status(201).json({ message: "successfully updated" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}



const getColleges = async (req, res) => {
    // const page = req.params.page > 0 ? req.params.page : 10;
    try {
        const requests = await college.find();
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const filterColleges = async (req, res) => {
    const filter = req.query.filter;
    try {
        const requests = await college.find({collegeName: {$regex: filter}});
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const getCollege = async (req, res) => {
    try {
        const requests = await college.find({ _id: req.params.id })
        res.status(200).json(requests[0]);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

const getMyCollege = async (req, res) => {
    try {
        const requests = await college.find({ sellerEmail: req.params.email })
        res.status(200).json(requests);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}


const deleteCollege = async (req, res) => {
    try {
        await college.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "successfully deleted" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

module.exports = {
    addCollege,
    updateCollege,
    getColleges,
    getCollege,
    getMyCollege,
    deleteCollege,
    filterColleges
}