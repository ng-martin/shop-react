(function (studentRepository) {

    var bluebird = require("bluebird");
    var fs = require("fs");

    studentRepository.init = function () {
        console.log('>> Init studentRepository');
    };

    studentRepository.getAll = function (next) {

        fs.readFile("resources/test.json", function (err, result) {
            if (err) {
                console.error("unable to read file test.json");
                next("unable to read file test.json: " + err, null);
            } else {
                try {
                    result = JSON.parse(result);                    
                    console.log(result);
                    next(null, result);
                } catch (e) {
                    console.error("invalid json in file");
                    next("invalid json in file : " + e, null);
                }
            }
        });

    };

})(module.exports);