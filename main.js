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


IOhandler.unzip(zipFilePath, pathUnzipped)
.then(() => {
  console.log("Extraction operation complete");
 }
).catch((err) => {
  console.error(err);
})


// IOhandler.readDir(pathUnzipped)
// .then((pngArray) => {
//     console.log(pngArray);
// }) 
// .catch((err) => {
//     console.log(err);
// })


// pathin = 'C:\\Users\\Victor\\Desktop\\ACIT 2520 Web Develop\\lab\\starter-6-2\\unzipped\\in.png';
// pathout = 'C:\\Users\\Victor\\Desktop\\ACIT 2520 Web Develop\\lab\\starter-6-2\\grayscaled\\out.png';

// IOhandler.grayScale(pathin, pathout)  
//     .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });


// IOhandler.unzip(zipFilePath, pathUnzipped)
// .then(() => {IOhandler.readDir(pathUnzipped)})
// .then((pngArray) => {
//     pngArray.forEach((png) => {
//         IOhandler.grayScale(png, pathProcessed)
//     })
// })
// .catch((err) => {
//     console.log(err);
// })