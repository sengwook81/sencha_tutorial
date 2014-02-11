Ext.define("Zero.main.TopFrame", {
	extend : "Ext.Panel",
	layout:'anchor',
	initComponent:function () {
		me = this;
		
		me.callParent(arguments);
	},
	getItems:function () {}
});