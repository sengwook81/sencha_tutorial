Ext.define("MyNewFrame",{
	extend:'Ext.panel.Panel',
	title: 'MyNewFrame',
	requires:'MynewComponent',
    width: 300,
    height:300,
    layout:'fit',
    items: [{
    	xtype:'newcmp',
    }]
});