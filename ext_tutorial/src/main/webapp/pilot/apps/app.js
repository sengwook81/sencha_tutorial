/**
 * 
 */
Ext.Loader.setPath('Desktop','../desktop/desktop.js');
Ext.Loader.setPath('MyPilot','');
Ext.application( {
	require:["Zero.test.MyApp"],
	name:"pilot",
	appFolder:"apps",
	launch: function() {
		myapp = new Ext.create("Zero.test.MyApp");
    }
	
});