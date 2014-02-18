/**
 * 상단 프레임 관리 view
 * 최상단 베너
 * 상단 메뉴를 자식으로 갖는다.
 */
Ext.define("Common.view.frame.LeftFrame",{
	extend: 'Ext.container.Container',
	alias: 'widget.leftFrame',
	//requires:['Common.store.frame.SubMenus'],
	initComponent:function () {
		console.log("initLeftFrame");
		var me = this;
		this.layout = {
			type: 'vbox',
	        align: 'stretch'
		};
		this.items = [
		   me.getSubMenu()
		];
		me.callParent(arguments);
	},
	getSubMenu:function () {
		return Ext.create('Common.view.frame.LeftSubMenu', {
		});
	}
	
});