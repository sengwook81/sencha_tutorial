Ext.application({
	requires:['App.view.Viewport'],
	name: 'App',
	//appFolder: 'app',
	controllers: [
		'Main' , 'MenuController' , 'Cmm.controller.OtherControl'
	],
	launch: function() {
		console.log("Launch Application");
		Ext.create('App.view.Viewport', {});
	}
});
