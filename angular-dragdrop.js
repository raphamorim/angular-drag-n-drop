'use strict';

var app = angular.module("dragAndDrop", [])

.directive('dropBox', function() {
	return {
		link: function(scope, el) {
			el.attr('ondrop', "angular.element(document.querySelector('body')).scope().drop(event)");
			el.attr('ondragover', "angular.element(document.querySelector('body')).scope().allowDrop(event)");
		}
	}
})

.directive('dragItem', function() {
	return {
		link: function(scope, el) {
			el.attr('ondragstart', "angular.element(document.querySelector('body')).scope().drag(event)");
			el.attr('draggable', 'true');
			scope.items.push(el);
		}
	}
});

// The controller

function dragAndDropController($scope) {
	$scope.dropped = [];
	$scope.items = [];

	// Drag and Drop functions

	$scope.allowDrop = function(ev){
		ev.preventDefault();
    };

	$scope.drag = function(ev) {
		ev.dataTransfer.setData("Text", ev.target.id);
	};

	$scope.drop = function(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("Text");
		var el = document.getElementById(data);
		ev.target.appendChild(el);
		$scope.dropped.push(el);
	};
}

