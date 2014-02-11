
		
Ext.define("Zero.test.MyApp",{
	viewport:null,
	require:["Ext.container.Viewport"],
	constructor: function () {
		me = this;
		console.log("MyApp Constructor ");
		me.init();
		
	},
	init:function () {
		console.log("init ");
		me = this;
		// 기본적으로 뷰포트는 Body 영역에 Mapping 된다.
		me.viewport = new Ext.container.Viewport({
            layout: {
            	type: 'fit',
            },
            items: Ext.create("Ext.Panel",{
			   			 layout: {
				            	type: 'vbox',
				                align: 'center',
				                pack: 'center'
				            },
				            items: me.getMainView(this)
					})
        });
	
	},
	getMainView:function () {
		// Ajax 처리로 서버에 현재 로그인되어있는 상태여부를 확인.
		return Ext.create('Zero.login.LoginPanel');
	}
});