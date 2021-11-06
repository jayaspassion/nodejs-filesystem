
//requiring path and fs modules
const path = require('path');
const fs = require('fs');

// create a new file in a specific folder
const createFile = async (req, res) => {

        const filePath = req.query.folderPath +`/${Date.now()}.txt`; 
        console.log(filePath)

        fs.writeFile(filePath, `Current Time : ${Date.now()}`, (err) => {
            if(err){
                console.error("Error occured!!", err);
                res.status(500).json("Check whether folder exists");
            }
            else{
                console.log("Your file is created!!");
                res.json("New File created!");
            }
        });
}

// used to get all files within Documents folder of current directory
const getAllFiles = async (req, res) => {

    console.log(req.query)
    const directoryPath = req.query.folderPath;
    console.log("Directory path is ! ", directoryPath);

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            res.status(500).json('Unable to scan directory: ' + err);
        } 
        res.json(files)
    });

}



module.exports = { createFile, getAllFiles };