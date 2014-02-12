Ext.define('Zero.controller.SecondController', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log("Init Controller");
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},

	onPanelRendered : function() {
		console.log('The panel2 was rendered');
	}
});