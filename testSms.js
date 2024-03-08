const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

// Get authentication
const credentials = {
    apiKey: 'c949f81fa14c71ce0373673d275b928d7b5db443f696ab4ff69ac03d991c3ed2', // use your sandbox app API key for development in the test environment
    username: 'sandbox'// use 'sandbox' for development in the test environment
};

const AfricasTalking = require("africastalking")(credentials);

const sms = AfricasTalking.SMS;
// Send SMS route
router.post("/", (req, res) => {
    console.log(req.body);
    const { to, message } = req.body || res.status(400).json({ error: "Both 'to' and 'message' are required" });
    sms
        .send({ to, message, enque: true })
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(error => {
            console.log(error);
            res.json(error.toString());
        });
});

module.exports = router;