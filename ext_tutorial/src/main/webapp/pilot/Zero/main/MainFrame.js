Ext.define("Zero.main.MainFrame", {
	extend : "Ext.Panel",
	layout : 'border',
	initComponent : function() {
		console.log("Init MainFrame");
		me = this;
		me.items = me.getFrame();
		me.callParent(arguments);
	},
	getFrame : function() {
		console.log("getFrame");
		return [  {
			xtype : 'panel',
			// xtype: 'panel' implied by default
			//title : 'West Region is collapsible',
			region : 'north',
			margins : '0 0 0 0',
			height : 50,
			id : 'north-region-container',
			layout : 'fit'
		}
		,	Ext.create('Ext.Panel', {
		    region:'west',
			width:300,
			collapsible : false, // make collapsible
			layout:'fit',
		    items:[Ext.create("Zero.main.LeftFrame")]
		})
		,Ext.create('Ext.tab.Panel', {
            region: 'center', // a center region is ALWAYS required for border layout
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            margins : '0 0 0 0',
            items: [{
                title: 'Close Me',
                closable: true,
                autoScroll: true
            }, {
                title: 'Center Panel',
                autoScroll: true
            }]
        }) ];
	}
});