# Angular Drag'n Drop
> Angular Drag'n Drop uses native HTML5 Drag and Drop, using few directives to control this feature, with no dependency on Jquery.

![Example](https://raw.githubusercontent.com/raphamorim/angular-drag-n-drop/gh-pages/assets/images/example.png)

See the documentation: [how it works!](http://raphamorim.com/angular-drag-n-drop/#guide)

## Basic Usage

**[ 1 ]** Get Angular Drag'n Drop using [Download Option](https://github.com/raphamorim/angular-drag-n-drop/archive/master.zip) or via bower. To get using [Bower](http://bower.io/) just run this command:

    $ bower install angular-drag-n-drop

**[ 2 ]** Add the source before body tag end:

    <script src="angular-dragdrop.min.js"></script>

**[ 3 ]** Start the Drag'n Drop in any element:

    <div ng-app="dragAndDrop" ng-controller="dragAndDropController">

**[ 4 ]** For each element allow dragging property, use **draggable** directive:

    <p draggable>Indiana Jones</p>
    <div draggable>Obi Wan Kenobi</div>

**[ 5 ]** For allow drop in any element, use **droppable** directive:

    <div class="box" droppable></div>


## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -m 'Add some feature'``
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :)

## About

**License:** MIT

**Created by** [Raphael Amorim](https://github.com/raphamorim)
