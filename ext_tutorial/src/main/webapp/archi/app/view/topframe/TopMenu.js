Ext.define('App.view.topframe.TopMenu', {
	extend : 'Ext.panel.Panel',
	id : 'topMenu',
	layout : 'hbox',
	initComponent : function() {
		this.addEvents('click');
		this.callParent(arguments);
	}
//items : menuItems
});