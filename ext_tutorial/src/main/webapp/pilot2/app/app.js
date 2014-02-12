Ext.Loader.setPath('Zero', 'module');

Ext.application({
	name : "Mvc Pilot",
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : [ {
				xtype : 'userlist',
			} ]
		});
	},
	controllers : [ 'Zero.controller.FirstController' ,'Zero.controller.SecondController'],

});