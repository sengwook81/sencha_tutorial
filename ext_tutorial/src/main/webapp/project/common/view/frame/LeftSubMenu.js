Ext.define('Common.view.frame.LeftSubMenu', {
	extend : 'Ext.tree.Panel',
	alias:'widget.subMenu',
	layout : 'fit',
	style: {
	    background: 'red'
	},
	store:'frame.SubMenus',
	initComponent : function() {
		var me = this;
		Ext.apply(this,{
			//store :Ext.data.StoreManager.lookup('frame.subMenus'),
			flex:1,
			rootVisible : false,
			hideHeaders: true,
			initComponent:function () {
				console.log("TreeParel Init Component");
				this.callParent(arguments);
			},
			columns: [
	          { xtype: 'treecolumn',  dataIndex: 'menuName', flex: 1 }
	        ]
		});
	
		
		this.callParent(arguments);
		console.log("In LeftSubMenu Store : " ,this.getStore());
	}
});