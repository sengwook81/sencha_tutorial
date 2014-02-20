/**
 * 
 */
Ext.define('Dooby.model.Node', {
    extend: 'Ext.data.Model',

    fields: ['node_id'
           , 'node_addr'
           , 'node_user'
           , 'node_password'
           , 'node_home'
           , 'bhadoop'
           , 'bhive'
           , 'bhbase'
           , 'bzk']	,
	associations: [{ type: 'hasOne', model: 'NodeApp' , name: 'hadoop' }]
});