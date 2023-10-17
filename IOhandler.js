/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: 2023-10-16
 * Author: Victor
 *
 */

// const unzipper = require("unzipper"),
const AdmZip = require("adm-zip"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */

// **need to fix resolve not printing**
const unzip = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    const zip = new AdmZip(pathIn);
    zip.extractAllTo(pathOut, true, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Extraction operation complete");
      }
    });
  });
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const pngArray = [];
        data.forEach((files) => {
          if (path.extname(files) === '.png') {
            pngArray.push(path.join(dir, files));
          };    
        resolve(pngArray);
        })
      }
    })
  })
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  
};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
