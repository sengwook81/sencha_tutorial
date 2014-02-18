Ext.define('Common.view.frame.TopMenu', {
	extend : 'Ext.panel.Panel',
	alias:'widget.topMenu',
	layout : 'hbox',
	style: {
	    background: 'red'
	},
	initComponent : function() {
		var me = this;
		me.store = Ext.data.StoreManager.lookup('frame.topMenu');
		console.log('Init TopMenu View ' , me.store);
		this.callParent(arguments);
	},
	setMenu:function (topMenuStore) {
		console.log("Set Menu",topMenuStore);
		var me = this;
		for(var i = 0;i<topMenuStore.getTotalCount();i++)
		{
			console.log("Add Menu Item");
			row = topMenuStore.getAt(i);
			me.add(Ext.create('Ext.form.Label',{
				text:row.get('menuName'),
				width:100,
				initComponent:function () {
					var me = this;
					console.log("Menu Item Constructor");
					me.menuCode= row.get('menuCode');
				},
				listeners : {
				    render : function(c) {
				    	// 자신의 이벤트를 Controller에게 전달 처리.
				        c.getEl().on('click', function(){ this.fireEvent('click', c); }, c);
				    }
				},
				getMenuCode: function () {
					var me = this;
					return me.menuCode;
				}
			}));
		}
		me.doLayout();
	}
});