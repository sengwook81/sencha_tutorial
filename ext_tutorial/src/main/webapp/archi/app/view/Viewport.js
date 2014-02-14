Ext.define('App.view.Viewport', {
	extend: 'Ext.Viewport',
	requires: [
		'App.view.TopFrame',
		'App.view.LeftFrame',
		'App.view.CenterFrame'
	],

	initComponent: function() {
	
		console.log("Create View Port");
		this.layout = {
			type: 'border'
		};
		this.items = [
			this.createTopFrame(), 
			this.createLeftFrame(), 
			this.createCenterFrame()
		];

		this.callParent(arguments);
	},

	createTopFrame: function() {
		console.log("Create Top Frame Method Call");
		this.topframe = Ext.create('widget.topframe', {
			region: 'north',
			height: 60	
		});
		return this.topframe;
	},
	createLeftFrame: function() {
		this.leftframe = Ext.create('App.view.LeftFrame', {
			region: 'west',
			width:200
		});
		return this.leftframe;
	},
	createCenterFrame: function() {
		this.centerframe = Ext.create('App.view.CenterFrame', {
			region: 'center'	
		});
		return this.centerframe;
	}
});
