const { use } = require("chai");
const Process   = require("../models/process.js");
const { string } = require("joi");

const removeProcess = async (req, res) => {

    //firstProcessName is allways a valid process.
    let { firstProcessName, processToRemoveName} = req.body;
    try{
        
       //Write your code here.
       
    }catch(err){
        
        // console.log(err.message);
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}


module.exports = { removeProcess };
