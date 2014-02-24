/**
 * Node 관리 모델.
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
   // 노드와 노드 어플리케이션의 관계는 1:n 관계로 정의.
   hasMany: [
	 	{ name: 'node_Apps', model: 'Dooby.model.NodeApp' }
	 ]
});