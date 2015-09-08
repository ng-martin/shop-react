(function() {
    'use strict';
    
    angular
        .module("notesApp")
        .controller('notesController', ['$scope', notesController]);
    
    function notesController($scope) {
        $scope.message = "Welcome Mate";
        var vm = this;
        vm.notes = [
            {
                id: 1,
                title: "Fix driveway"               
            },
            {
                id: 2,
                title: "Replace roof"               
            },
            {
                id: 3,
                title: "Fix dryer"               
            },
            {
                id: 4,
                title: "Tear out deck"               
            },
            {
                id: 5,
                title: "Add electricity to garage"               
            }
            ];
    }   
    
})();
    