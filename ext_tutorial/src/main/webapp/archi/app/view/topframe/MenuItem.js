Ext.define('App.view.topframe.MenuItem', {
	alias:'widget.topmenuitem',
	extend : 'Ext.panel.Panel',
	listeners : {
		render : function(c) {
			console.log("Render MenuItem");
		},
		click : {
			fn : function() {
				console.log("CLICK MenuItem");
			},
			// You can also pass 'body' if you don't want click on the header or
			// docked elements
			element : 'el'
		},
		dblclick : {
			fn : function() {
				console.log("DOUBLE CLICK MenuItem");
			},
			// You can also pass 'body' if you don't want click on the header or
			// docked elements
			element : 'el'
		}
	},
	initComponent : function() {
		this.addEvents('click');
		this.callParent(arguments);
	}
});