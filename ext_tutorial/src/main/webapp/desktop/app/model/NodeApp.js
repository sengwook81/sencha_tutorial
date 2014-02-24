/**
 * 노드 어플리케이션 모델.
 */
Ext.define('Dooby.model.NodeApp', {
    extend: 'Ext.data.Model',
    fields: ['node_id'
           , 'app_type'
           , 'app_port'
           , 'installed'
           , 'app_name'
           ]

});