Ext.define('App.view.LeftFrame', {
	extend: 'Ext.container.Container',
	alias: 'widget.leftframe',
	name:'leftframe',
	initComponent: function() {
		console.log("Init Left Frame");
		
		this.items = [
		    this.craeteMenuSearch(),
		    this.createMenu()
		    
		];
		this.layout = {
	        type: 'vbox',
	        align: 'stretch'
	    };

		this.callParent(arguments);
	},

	craeteMenuSearch: function () {
		this.searchbox = Ext.create('App.view.leftframe.SearchBox', { height:20
		});
		return this.searchbox;
	},
	createMenu: function() {
		this.menu = Ext.create('App.view.leftframe.SubMenuTree', { flex:1
		});

		return this.menu;
	}
});
