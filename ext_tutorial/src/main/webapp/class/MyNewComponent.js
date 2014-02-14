Ext.define("MyNewComponent",{
	extend:'Ext.panel.Panel',
	alias:'widget.newcmp',
	title: 'MyNewComponent',
    items: [{
    	xtype:'panel',
    	title:'It\'s Wonderful',
    	html:'Zero\'s Component'
    }]
});