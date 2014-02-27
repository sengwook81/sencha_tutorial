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
		actionMethods: {
	            create: 'POST', read: 'GET', update: 'POST', destroy: 'GET'
	        },
        api:{
            read: '/ext/desktop/data/nodes.json',
            update: '/ext/desktop/data/update.json',
            create: '/ext/desktop/data/create.json'
        },
        writer: {
        	type:'json'
        },
		reader : {
			type : 'json',
			root : '_rslt',
		},/*
		writer: {
			type:'json',
			encode:'true',
			writeAllFields : true
		},*/
		extraParams:{ hello:'world'}
	}
});