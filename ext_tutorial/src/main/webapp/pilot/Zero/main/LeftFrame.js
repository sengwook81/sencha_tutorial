Ext.define('Zero.main.LeftFrame',{
	extend:'Ext.panel.Panel',
    layout: 'anchor',
    title:"Hello",
    initComponent:function () {
    	items = this.getComponentItem();
    	this.callParent(arguments);
    },
    getComponentItem:function () {
    	console.log("LeftFrame GetItem");
    	return [
    	        {
    	            xtype: 'panel',
    	            title: '75% Width and 20% Height',
    	            anchor: '30% 30%'
    	        },
    	        {
    	            xtype: 'panel',
    	            title: 'Offset -300 Width & -200 Height',
    	            anchor: '100% 50%'     
    	        },
    	        {
    	            xtype: 'panel',
    	            title: 'Mixed Offset and Percent',
    	            anchor: '-250 20%'
    	        }
    	    ];
    }
});