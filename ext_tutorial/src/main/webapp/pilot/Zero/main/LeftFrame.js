Ext.define('Zero.main.LeftFrame',{
	extend:'Ext.panel.Panel',
	layout: {
        type: 'vbox',
        align: 'stretch'
    },
    title:"Hello",
    initComponent:function () {
    	this.items = this.getComponentItem();
    	this.callParent(arguments);
    },
    getComponentItem:function () {
    	console.log("LeftFrame GetItem");
    	return [
    	        Ext.create("Zero.main.leftframe.SearchBox",{height:20}),
    	        Ext.create("Zero.main.leftframe.SubMenuTree",{flex:1})
    	    ];
    }
});