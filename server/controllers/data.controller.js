const Data = require('../models/data');



class Info {

    constructor() {}

     //POST Insert a new country

     async addData(data) {
        return Data.create(data);
    };

    //GET all data

    async findAllData(dataArray) {
        return Data.find(dataArray);
    };

    //GET data by Name

    async findById(id) {
        return Data.findById(id);
    };

   

    //PUT Update country

    async updateData(info) {
        return Data.findByIdAndUpdate(info);
    };

    //DELETE country by ID

    async deleteData({ id: id }) {
        const idFound = Data.findOneAndDelete({ id: id })
        return idFound.remove()
    };
};


const dataController = new Info;
module.exports = dataController;