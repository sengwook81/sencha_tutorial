Ext.define('Common.BaseViewPort', {
	extend: 'Ext.Viewport',
	requires:['Common.view.frame.TopFrame'],
	initComponent: function() {
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
		// Create Top Frame
		this.topframe = Ext.create('widget.topFrame', {
			region: 'north',
			//height: 100	,
		});
		return this.topframe;
	},
	createLeftFrame: function() {
		this.leftframe = Ext.create('Common.view.frame.LeftFrame', {
			region: 'west',
			width:200
		});
		return this.leftframe;
	},
	createCenterFrame: function() {
		this.centerframe = Ext.create('Common.view.frame.CenterFrame', {
			region: 'center'	
		});
		return this.centerframe;
	}
});
