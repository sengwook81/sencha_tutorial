Ext.define('App.view.CenterFrame', {
	extend: 'Ext.container.Container',
	alias: 'widget.centerframe',


	initComponent: function() {

		console.log("Init Center Frame");
		this.layout = {
			type: 'fit'
		};
	
		this.items = [
		     this.createBody()
		];

		this.callParent(arguments);
	},

	createBody: function() {
		this.mainbody = Ext.create('Ext.panel.Panel', {
			title:'Center',
			html:"Center Region Panel"
		});

		return this.mainbody;
	}
});
