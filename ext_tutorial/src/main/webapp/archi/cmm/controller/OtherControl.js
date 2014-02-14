Ext.define('Cmm.controller.OtherControl', {
	//requires:['App.store.TopMenus'],
	extend: 'Ext.app.Controller',
	views:['App.view.TopFrame' ,'App.view.LeftFrame'],
	init: function() {
		this.control({
            'topframe': {
                render: function () { console.log("Other Controller Top Frame");}
            },
            'leftframe' : {
            	render: function () { console.log("Other Controller Left Frame");}
            }
			
        });
    },
    onPanelRendered: function() {
        console.log('Other Controller was rendered');
    }
});
