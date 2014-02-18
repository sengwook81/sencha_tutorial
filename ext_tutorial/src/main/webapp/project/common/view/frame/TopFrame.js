/**
 * 상단 프레임 관리 view
 * 최상단 베너
 * 상단 메뉴를 자식으로 갖는다.
 */
Ext.define("Common.view.frame.TopFrame",{
	extend: 'Ext.container.Container',
	alias: 'widget.topFrame',
	initComponent:function () {
		console.log("init TopFrame");
		var me = this;
		this.layout = {
				layout : 'vbox',
				align : 'stretch'
		};
		this.items = [
          me.getTopBanner(),
          me.getTopMenu()
		];
		me.callParent(arguments);
	},
	getTopBanner:function () {
		return Ext.create('Common.view.frame.TopBanner',{
			height:50
		});
	},
	getTopMenu:function () {
		return Ext.create('Common.view.frame.TopMenu',{
		});
	}
	
});