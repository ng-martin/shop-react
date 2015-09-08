(function(repository) {
    
    var studentRepository = require("../repositories/studentRepository.js");
    var courseRepository = require("../repositories/courseRepository.js");
        
    repository.init = function() {
        studentRepository.init();
        courseRepository.init();
    };
    
    repository.getAllStudents = function(next) {
        studentRepository.getAll(next);
    };
        
})(module.exports);