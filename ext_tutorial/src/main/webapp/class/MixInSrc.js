Ext.define('MixinSrc', {
	extend:"Ext.panel.Panel",
	mixins:{
		mix:'Mixin'
	},
	initComponent:function () {
		//this.mixins.mix.constructor();
		console.log(this.mixins.mix.getMixinFunc("Hello Mixin"),this);
		this.callParent(arguments);
	}
});