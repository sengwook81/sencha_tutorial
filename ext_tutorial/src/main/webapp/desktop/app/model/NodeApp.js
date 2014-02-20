/**
 * 
 */
Ext.define('Dooby.model.Node', {
    extend: 'Ext.data.Model',
    fields: ['node_id'
           , 'app_type'
           , 'app_port'
           , 'installed'
           , 'app_name'
           ]	,
	associations: [{ type: 'hasOne', model: 'NodeApp' }]
});