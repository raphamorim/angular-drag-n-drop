'use strict';

var app = angular.module("dragAndDrop", [])

.directive('droppable', function() {
    return function(scope, element) {
        var el = element[0];

        el.addEventListener('drop', function(e) {
                e.preventDefault();
                var data = e.dataTransfer.getData("Text");
                var element = document.getElementById(data);
                e.target.appendChild(element);
                scope.dropped.push(element);

                return false;
            },
            false
        );

        el.addEventListener('dragover', function(e) {
                e.preventDefault();
            },
            false
        );
    }
})

.directive('draggable', function() {
    return function(scope, element) {
        var el = element[0];

        el.draggable = true;

        el.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData("Text", e.target.id);
                this.classList.add('drag');
            },
            false
        );

        el.addEventListener('dragend', function(e) {
                this.classList.remove('drag');
            },
            false
        );

        scope.dragged.push(el);
    }
});

// The controller

function dragAndDropController($scope) {
    $scope.dragged = [];
    $scope.dropped = [];
}
