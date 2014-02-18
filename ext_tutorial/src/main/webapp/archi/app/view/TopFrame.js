Ext.define('App.view.TopFrame', {
	//extend: 'Ext.panel.Panel',
	extend : 'Ext.container.Container',
	alias : 'widget.topframe',
	name : 'topframe',
	listeners : {
		render : function(c) {

		},
		click : function() {
			console.log("Click Who?");
		},
		dblclick : {
			fn : function() {
				console.log("double click");
			},
			// You can also pass 'body' if you don't want click on the header or
			// docked elements
			element : 'body'
		}
	},
	initComponent : function() {
		console.log("Init Top Frame");
		this.layout = {
			layout : 'vbox',
			align : 'stretch'
		};
		//this.addEvents("click");
		this.menuStore = Ext.getStore('TopMenus');
		this.items = [ this.createBanner(), this.createTopMenu() ];
		this.callParent(arguments);
	},

	createBanner : function() {
		this.banner = Ext.create('Ext.panel.Panel', {
			items : [ {
				xtype : 'image',
				src : 'http://www.tynetworks.co.kr/img_kr/h1_logo.png'
			} ]
		});

		return this.banner;
	},
	createTopMenu : function() {
		menuItems = [];
		menustore = this.menuStore;
		if (this.menuStore) {
			for (var i = 0; i < menustore.count(); i++) {

				console.log(menustore.getAt(i).get('name'));

				menuItems.push(Ext.create("App.view.topframe.MenuItem", {
					width : 100,
					text:menustore.getAt(i).get('name'),
					config:{code:menustore.getAt(i).get('code'),name:menustore.getAt(i).get('name'),}
				}));

			}
		}

		this.topMenu = Ext.create('App.view.topframe.TopMenu', {
			items : menuItems
		});

		return this.topMenu;
	}
});
