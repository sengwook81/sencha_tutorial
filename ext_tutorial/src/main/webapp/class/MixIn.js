Ext.define('Mixin', {
	constructor:function (){
		console.log("Contructor");
	},
    getMixinFunc: function(text) { return "print "+text; }
});