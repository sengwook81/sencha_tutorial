/**
 * 
 */
Ext.define('Dooby.store.Nodes', {
	extend: 'Ext.data.Store',
	requires: ['Dooby.model.Node'],
	model: 'Dooby.model.Node',
    autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/nodes.json'
		}
	}
});