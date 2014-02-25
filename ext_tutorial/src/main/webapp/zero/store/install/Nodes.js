/**
 * 
 */
Ext.define('Zero.store.install.Nodes', {
	extend : 'Ext.data.Store',
	storeId: 'install_nodes',
	model:'Zero.model.install.Node',
	autoLoad : false,
//	listeners: {
//	    'load': function(store, records, successful, operation) {
//	      console.log("Loaded Zero.store.install.Nodes",arguments.callee.caller.toString());
//	    }
//	  },
	pageSize: 10,
	proxy : {
		type : 'ajax',
		url : '/ext/desktop/data/nodes.json',
		reader : {
			type : 'json',
			root : '_rslt',
		}
	}
});