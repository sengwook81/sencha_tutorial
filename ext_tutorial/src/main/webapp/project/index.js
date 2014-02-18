Ext.application({
	name : 'Project Template',
	//autoCreateViewport:true,
	paths:{
		'Common':'common'
	},
	appFolder:"",
	controllers : [ 'Common.controller.BaseController' ],//,'Common.controller.MessageController'],
	launch : function() {
		Ext.create('Common.BaseViewPort', {
			items : {
				html : 'My App'
			}
		});
	}
});
