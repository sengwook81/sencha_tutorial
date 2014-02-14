Ext.define("SengWook",{
		extend:'Ext.panel.Panel',
		renderTo:Ext.getBody(),
		requires:['App.view.TopFrame'],
		title: 'Hello',
	    width: 200,
	    height:500,
	    items: [{
	    	xtype:'topframe',
	    	title:'Top Frame'
	    }]
	});