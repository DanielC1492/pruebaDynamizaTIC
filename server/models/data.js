const mongoose = require("mongoose");

const dataSchema = {
    country: {
        type: String,
        required: true,
        default: "country"
    },
    population: {
        type: Number,
        default: "population"
    },
    populationDensity: {
        type: Number
    },
    co2Emissions: {
        type: Number,
        default: 'N/A'
    },
    crimeRate: {
        type: String
    }
};


const Data = mongoose.model("data", dataSchema);
module.exports = Data;