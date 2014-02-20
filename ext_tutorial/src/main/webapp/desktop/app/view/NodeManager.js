Ext.define('Dooby.view.NodeManager', {
	extend: 'Zero.ex.form.ModelFormPanel',
	alias:'widget.nodemanager',
	model: 'Dooby.model.Node',
	addMode: false,
	readOnly: true,
	autoScroll: true,

	layout: {
		type: 'anchor'
	},
	defaults: {
		labelAlign: 'top',
		labelSeparator: '',
		anchor: '100%',
		padding: '20 20 0 20',
		readOnlyCls: 'read-only',
		readOnly: true
	},

	items: [
		{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: 'Company Name',
			allowBlank: false,
		},
		{
			xtype: 'textfield',
			name: 'headCount',
			fieldLabel: 'Head Count'
		}
	],

	initComponent: function() {
		console.log("Init NodeManagerView");
		this.callParent();
	}
});