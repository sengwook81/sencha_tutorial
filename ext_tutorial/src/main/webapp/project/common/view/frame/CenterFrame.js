/**
 * 상단 프레임 관리 view
 * 최상단 베너
 * 상단 메뉴를 자식으로 갖는다.
 */
Ext.define("Common.view.frame.CenterFrame",{
	extend: 'Ext.tab.Panel',
	alias: 'widget.centerFrame',
	initComponent:function () {
		console.log("initCenterFrame");
		var me = this;
		
		this.items = [
		];
		me.callParent(arguments);
	}
	
});