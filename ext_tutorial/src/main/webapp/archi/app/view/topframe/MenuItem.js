Ext.define('App.view.topframe.MenuItem', {
	alias:'widget.topmenuitem',
	extend : 'Ext.form.Label',
	// 생성자가 호출되는 시점에 Getter / Setter를 생성하므로 미리 선언해줘야함.
	config:{
		code:'',
		name:''
	},
	initComponent : function(param) {
		// 인자로 넘어온 Config 설정값을 현재 Component에 설정되어 있는 Config 값과 병합. 
		this.initConfig(this.config);
		this.callParent(arguments);
	},
	listeners : {
	    render : function(c) {
	    	// 자신의 이벤트를 Controller에게 전달 처리.
	        c.getEl().on('click', function(){ this.fireEvent('click', c); }, c);
	    }
	}
});