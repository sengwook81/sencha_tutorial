Ext.define('App.controller.MenuController', {
	//requires:['App.store.TopMenus'],
	extend: 'Ext.app.Controller',
	stores:['TopMenus'],
	models:['TopMenu'],
	views:['App.view.TopFrame' ,'App.view.LeftFrame'],
	refs: [{
		ref:'topMenu',
		selector:'#topMenu'
	}],
	init: function() {
		console.log("TopMenuPanel : ",this.getTopMenu());
		this.control({
            'topframe': {
                render: function () { console.log("Render Top Frame");},
                click: function () { console.log("Click Top Frame"); } 
            },
            '#topMenu': {
                render: function (c) { console.log("Render Menu",c);},
                click: function () { console.log("Click Menu"); } 
            },
            '#topMenu label':{
                click: function (c) { console.log("Click MenuItem On Controller",c.getXType()); 
                console.log("Menu Code : " , c);
                
                } 
            },
            'leftframe' : {
            	render: function () { console.log("Render Left Frame");}
            }
			
        });
    },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});
