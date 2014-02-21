/**
 * 
 */
Ext.define('Dooby.model.Node', {
    extend: 'Ext.data.Model',
    requires:['Dooby.model.NodeApp'],
    fields: ['node_id'
           , 'node_name'
           , 'node_addr'
           , 'node_user'
           , 'node_password'
           , 'node_home'
           , 'bhadoop'
           , 'bhive'
           , 'bhbase'
           , 'bzk']	,
   hasMany: [
             { name: 'hadoop', model: 'Dooby.model.NodeApp' },
	 	{ name: 'node_Apps', model: 'Dooby.model.NodeApp' }
	 ]
});