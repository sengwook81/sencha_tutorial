/**
 * 
 */
Ext.define('Zero.view.desktop.Install', {
	extend : 'Ext.ux.desktop.Module',
	requires:['Zero.view.install.Node'],
	id : 'installer',
	title : 'Installer',
	init : function() {
		this.launcher = {
			text : 'Installer',
			iconCls : 'install'
		};
	},
	
	createWindow:function () {
		me = this;
		var desktop = this.app.getDesktop();
		console.log(desktop);
		var win = desktop.getWindow(me.id);
		if(!win) {
			
			win = desktop.createWindow({
				id:me.id,
				title:me.title,
				width:600,
				height:400,
				hideMode:'offset',
				layout:'fit',
				items:[{
					xtype:'installNodeView',
				}
				]
			});
		}
		
		return win;
	}

});