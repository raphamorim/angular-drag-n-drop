'use strict';

var app = angular.module("dragAndDrop", [])

// Application Directives

.directive('droppable', function() {
    return function(scope, element) {
        var el = element[0];

        // Add element to droppable list
        scope.droppable.push(el);

        // Apply prototype to list dropped items
        el.droppedItems = [];

        // Event to drop action on droppable element
        el.addEventListener('drop', function(e) {
                e.preventDefault();
                var data = e.dataTransfer.getData("Text");
                var element = document.getElementById(data);
                e.target.appendChild(element);

                var index = scope.dragList.indexOf(element);
                scope.dragList.splice(index, 1);

                return false;
            },
            false
        );

        // Event to drag over action on droppable element
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

        // Apply draggable property on element
        el.draggable = true;

        // If element don't have any id, create random id
        if (!el.id) el.id = Math.floor((Math.random() * 100000) + 1);

        // Event on drag start
        el.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData("Text", e.target.id);

                // When element is on drag, add drag class
                this.classList.add('drag');
            },
            false
        );

        // Event on drag end
        el.addEventListener('dragend', function(e) {

                // When drag over, remove drag class
                this.classList.remove('drag');
            },
            false
        );

        // Add this element on dragList
        scope.dragList.push(el);
    }
});

// Application Controller

function dragAndDropController($scope) {
    /*
        Element list with allow drag
    */
    $scope.dragList = [];

    /*
        Element list with allow drop, to see dropped items on the element.
        Use droppedItems property on each element.
    */
    $scope.droppable = [];
}
