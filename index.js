const request = require('request');
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var crypto = require('crypto');
const CACHE_DURATION = 600
const propertyAccessTest = require("./ConfigurationFile.json")
const imageThumbnail = require('image-thumbnail');

// In this file, the developer code has to be defined, with the possibility of defining multiple functions to be executed.

// The choice of triggering each one of these functions is based on the parameter "target" that is set on the start up process with the command example: 
// npx @google-cloud/functions-framework --target=firstTest --port 8080

// A first example of a function
exports.firstTest = async (req, resp) => {
    
      let thumbnail
      try {
        thumbnail = await imageThumbnail(req.body[propertyAccessTest.property]);
        console.log(thumbnail);
    } catch (err) {
        console.error(err);
    }

    return thumbnail
}

// A second example of a function
exports.secondTest = async (req, resp) => {

      let thumbnail
      try {
        thumbnail = await imageThumbnail(req.body[propertyAccessTest.property]);
        
      } catch (err) {
        console.error(err);
      }

      return thumbnail
}

// A third example of a function

exports.thirdTest = async (req, resp) => {
    let thumbnail
    try {
        thumbnail = await imageThumbnail(req.body[propertyAccessTest.property]);
        
    } catch (err) {
      console.error(err);
    }
    return thumbnail
}