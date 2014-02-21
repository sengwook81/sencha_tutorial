/**
 * 
 */
Ext.define('Dooby.store.Nodes', {
	extend : 'Ext.data.Store',
	requires : [ 'Dooby.model.Node' ],
	model : 'Dooby.model.Node',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'data/nodes.json',
		reader : {
			type : 'json',
			root : 'items',
			successProperty : 'success'
		}
	}
});