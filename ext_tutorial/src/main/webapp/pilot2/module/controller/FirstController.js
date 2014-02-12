Ext.define('Zero.controller.FirstController', {
	extend : 'Ext.app.Controller',
	//require : ['Zero.views.FirstViews'],
	views: [
	        'Zero.views.FirstViews'
	    ],
	init : function() {
		console.log("Init Controller");
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			},
			'userlist': {
                itemdblclick: this.editUser
            }
		});
	},

	onPanelRendered : function() {
		console.log('The panel was rendered');
	},
	editUser:function () {
		console.log("Edit User Calll");
	}
});