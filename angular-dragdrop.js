'use strict';

var app = angular.module("dragAndDrop", [])

.directive('droppable', function() {
	return function(scope, element) {
		var el = element[0];

		el.addEventListener('drop', function(ev) {
				ev.preventDefault();
				var data = ev.dataTransfer.getData("Text");
				var eid = document.getElementById(data);
				ev.target.appendChild(eid);
				scope.dropped.push(eid);

				return false;
			},
			false
		);

		el.addEventListener('dragover', function(ev) {
				ev.preventDefault();
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
