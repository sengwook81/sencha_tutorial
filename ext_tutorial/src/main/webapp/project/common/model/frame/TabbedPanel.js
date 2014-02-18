/**
 * 메뉴처리 처리를 위한 모델.
 * 메뉴명 , 메뉴코드 , 상위 메뉴코드 , Content정보를 갖는다.
 */
Ext.define('Common.model.frame.TabbedPanel',{
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'menuName',		// 메뉴명
		type : 'string'
	}, {
		name : 'menuCode',		// 메뉴코드
		type : 'string'
	}, {
		name : 'index',			// 탭에서의 위치.
		type : 'number'
	}
	]
});