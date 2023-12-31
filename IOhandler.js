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

const unzip = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    const zip = new AdmZip(pathIn);
    zip.extractAllToAsync(pathOut, true, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(pathOut);
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
        let pngArray = [];
        data.forEach((files) => {
          if (path.extname(files) === '.png') {
            pngArray.push(path.join(dir, files));
          };    
        });
        resolve(pngArray);
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
    return new Promise((resolve, reject) => {
      const fileNewPath = path.join(pathOut, path.basename(pathIn, '.png') + '_gray.png');
      const newPng = new PNG({
        filterType: 4,
    });
      fs.createReadStream(pathIn)
      .pipe(newPng)
      .on("parsed", function () {
          for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
              const idx = (this.width * y + x) << 2;

              //grayscale
              const gray = (this.data[idx] + this.data[idx + 1] + this.data[idx + 2]) / 3;
              this.data[idx] = gray;
              this.data[idx + 1] = gray;
              this.data[idx + 2] = gray;
              //reduce opacity
              this.data[idx + 3] = this.data[idx + 3] >> 1;
              
          }
        }
        newPng.pack().pipe(fs.createWriteStream(fileNewPath))
        .on("finish", () => {
          resolve(`Grayscale operation for ${path.basename(pathIn)} completed`);
        })
        .on("error", (err) => {
          reject(err);
      })
      }) 
      .on("error", (err) => {
        reject(err);
      } )
    })
  };


module.exports = {
  unzip,
  readDir,
  grayScale,
};
