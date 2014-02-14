Ext.define('App.controller.Main', {
	extend: 'Ext.app.Controller',
	views:['App.view.LeftFrame'],
	init: function() {
		this.control({
            'viewport': {
                render: this.onViewportRendered
            }
        });
    },
    onViewportRendered: function() {
        console.log('The panel was rendered');
    }
});
