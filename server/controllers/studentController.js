(function(studentController) {
    
    var repository = require("../repositories");
    
    studentController.init = function(app) {
        loadRoutes(app);
    };
    
    loadRoutes = function(app) {
        
        app.get("/test", function(req, res) {
           
            repository.getAllStudents(function(err, result) {
                var text = (err === null ? result : err);
                res.send(text);
            });           
            
        });        
        
        app.get("/", function(req, res){
            res.render("index", { data: "This is a test only" });
        });
        
        app.get("/angular", function(req, res) {
            res.render("index-angular", {}); 
        });
        
    }
    
})(module.exports);