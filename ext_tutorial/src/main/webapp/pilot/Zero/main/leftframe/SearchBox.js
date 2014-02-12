Ext.define('Zero.main.leftframe.SearchBox',{
	extend:'Ext.panel.Panel',
	layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent:function () {
    	this.items = this.getComponentItem();
    	this.callParent(arguments);
    },
    getComponentItem:function () {
    	console.log("SearchBox GetItem");
    	return [
    	        {
    	            xtype: 'textfield',
    	            fieldLabel: 'Search',
    	            labelWidth:50,
    	            height:30
    	        },
    	        {
    	            xtype: 'button',
    	            text:"Search",
    	            width:50
    	        }
    	    ];
    }
});