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

.directive('dropItem', function() {
	return {
		link: function(scope, el) {
			el.attr('ondragstart', 'drag(event)');
			el.attr('draggable', 'true');
		}
	}
});

// The controller

function dragAndDropController($scope) {
	$scope.items = ['one', 'two', 'three', 'four', 'five', 'six'];
	$scope.dropped = [];
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
