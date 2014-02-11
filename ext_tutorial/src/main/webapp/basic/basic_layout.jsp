<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="../lib/ext-4.2.1.883/resources/css/ext-all.css">
<script type="text/javascript"
	src="../lib/ext-4.2.1.883/ext-all-debug-w-comments.js">
</script>
</head>
<body>

<div id="master">
</div>
</body>
<script type="text/javascript">
<!-- 
LayOut Enum 참고.
http://docs.sencha.com/extjs/4.2.1/#!/api/Ext.enums.Layout
-->
Ext.onReady(function (){
	var master = Ext.create('Ext.panel.Panel', {
	    renderTo: Ext.get("master"),
	    width: 1024,
	    height: 900,
	    title: 'Master'
	    
	});
	Ext.create('Ext.panel.Panel', {
	    renderTo: Ext.getBody(),
	    width: 400,
	    height: 200,
	    title: 'Container Panel',
	    layout: 'column',
	    
	    items: [
	        {
	            xtype: 'panel',
	            title: 'Child Panel 1',
	            height: 100,
	            columnWidth: 0.3
	        },
	        {
	            xtype: 'panel',
	            title: 'Child Panel 2',
	            height: 100,
	            columnWidth: 0.5
	        }
	    ]
	});
	
	var containerPanel = Ext.create('Ext.panel.Panel', {
	    renderTo: Ext.getBody(),
	    width: 400,
	    height: 200,
	    title: 'Container Panel',
	    layout: 'column',
	    suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
	});
	// Add a couple of child items.  We could add these both at the same time by passing an array to add(),
	// but lets pretend we needed to add them separately for some reason.
	containerPanel.add({
	    xtype: 'panel',
	    title: 'Child Panel 1',
	    height: 100,
	    columnWidth: 0.5
	});
	containerPanel.add({
	    xtype: 'panel',
	    title: 'Child Panel 2',
	    height: 100,
	    columnWidth: 0.5
	});
	containerPanel.add({
	    xtype: 'panel',
	    title: 'Child Panel 3',
	    height: 100,
	    columnWidth: 0.5
	});
	// Turn the suspendLayout flag off.
	containerPanel.suspendLayout = false;
	// Trigger a layout.
	containerPanel.doLayout();
	
});
</script>
</html>