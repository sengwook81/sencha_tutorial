/**
 * 상단 메뉴정보를 처리하는 Store 클래스.
 */
Ext.define('Common.store.frame.TopMenus', {
	extend:'Ext.data.Store',
	model: 'Common.model.frame.Menu',
	autoLoad: false,
    proxy: {
        type: 'ajax',	// Ajax방식을 이용하여 데이터 수
        url: 'data/frame/topmenu.json',	// data를 제공하는 url 현제 페이지 번호 , 페이지 건수, 시작
								// , 종료 번호를 전달,
        						// 실제요청은
								// data/users.json?_dc=1392616287947&page=1&start=0&limit=25
        reader: {
            type: 'json',
            root: 'items',
            successProperty: 'success'
        }
    }
});