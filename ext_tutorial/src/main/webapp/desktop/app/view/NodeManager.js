Ext.define('Dooby.view.NodeManager', {
	extend: 'Zero.ex.form.ModelFormPanel',
	requires: [
	      'Dooby.view.field.HadoopField'
	],
	alias:'widget.nodemanager',
	model: 'Dooby.model.Node',
	addMode: false,
	readOnly: true,
	autoScroll: true,

	layout: {
		type: 'anchor'
	},
	defaults: {
		labelAlign: 'left',
		labelSeparator: '',
		anchor: '100%',
		padding: '20 20 0 20',
		readOnlyCls: 'read-only',
		readOnly: true
	},

	items: [
		{
			xtype: 'textfield',
			name: 'node_id',
			fieldLabel: 'ID',
			allowBlank: false,
		}, {
			xtype: 'textfield',
			name: 'node_name',
			fieldLabel: 'Name'
		}, {
			xtype: 'textfield',
			name: 'node_user',
			fieldLabel: 'User'
		}, {
			xtype: 'textfield',
			name: 'node_home',
			fieldLabel: 'Home'
		}, {
			xtype: 'hadoopappfield',
			name: 'hadoop',
			fieldLabel: 'Hadoop'
		}
	],

	initComponent: function() {
		console.log("Init NodeManagerView");
		this.callParent();
	}
});