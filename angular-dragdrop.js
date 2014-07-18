'use strict';

var app = angular.module("dragAndDrop", [])

.directive('dropBox', function() {
	return {
		link: function(scope, el) {
			el.attr('ondrop', 'drop(event)');
			el.attr('ondragover', 'allowDrop(event)');
		}
	}
})

.directive('dragItem', function() {
	return {
		link: function(scope, el) {
			el.attr('ondragstart', 'drag(event)');
			el.attr('draggable', 'true');
			scope.items.push(el);
		}
	}
});

// The controller

function dragAndDropController($scope) {
	$scope.dropped = [];
	$scope.items = [];
}

// Independent functions

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
