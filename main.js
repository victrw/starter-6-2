const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: 2023-10-16
 * Author: Victor
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");


// IOhandler.unzip(zipFilePath, pathUnzipped)

IOhandler.readDir(pathUnzipped)
.then((pngArray) => {
    console.log(pngArray);
}) 
.catch((err) => {
    console.log(err);
})

