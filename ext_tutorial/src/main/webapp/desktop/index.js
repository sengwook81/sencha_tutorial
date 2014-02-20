Ext.application({
	name : 'Dooby',
	//autoCreateViewport:true,
	requires: [
	        	'Dooby.view.NodeManager', 
	        	//'FormPreso.view.CompanyFormPanel'
	        ],
	paths : {
		'Zero' : '../zero'
	},
	appFolder : "app",
	controllers : [ 'NodeController' ],//,'Common.controller.MessageController'],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			padding : 50,
			items : [ {
				xtype : 'nodemanager',
				flex : 1
			} ]
		});
	}
});
