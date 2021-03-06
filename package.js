Package.describe({
  summary: 'Flavor of jointjs for Meteor'
});

Package.on_use(function (api) {

	api.use([
		'templating',
		'handlebars',
		'jquery',
	], 'client');

	api.add_files([
		'lib/lodash.min.js'
	], ['client', 'server']);

	api.add_files([
		'lib/css/joint.css',
		'lib/css/joint.ui.stencil.css',
		'lib/css/joint.ui.halo.css',
		'lib/css/joint.ui.selectionView.css',
		'lib/css/joint.ui.paperScroller.css',
		'lib/css/style.css',
		'lib/joint-all.js'
	], 'client');

    api.export([
      'joint',
    ], 'client');

});
