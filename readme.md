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


## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -m 'Add some feature'``
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :)

## About

**License:** MIT

**Created by** [Raphael Amorim](https://github.com/raphamorim)
