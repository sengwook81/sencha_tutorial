Ext.define('Common.view.frame.TopBanner', {
	extend : 'Ext.panel.Panel',
	alias:'widget.topBanner',
	layout : 'hbox',
	initComponent : function() {
		var me = this;
		console.log('Init TopBanner View');
		me.items = [ {
			xtype : 'image',
			src : 'http://www.tynetworks.co.kr/img_kr/h1_logo.png'
		} ];
		this.callParent(arguments);
	}
});