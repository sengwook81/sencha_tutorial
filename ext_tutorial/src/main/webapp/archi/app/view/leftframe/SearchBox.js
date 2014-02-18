Ext.define('App.view.leftframe.SearchBox',{
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
    	return [
    	        {
    	            xtype: 'textfield',
    	            fieldLabel: 'Search',
    	            labelWidth:50,
    	            height:30,
    	            flex:1
    	        },
    	        {
    	            xtype: 'button',
    	            text:"Search",
    	            width:50
    	        }
    	    ];
    }
});