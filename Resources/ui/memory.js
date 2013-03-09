/**
 * @author Asaichi-Note00
 */
function memory()
{
	var win = Ti.UI.createWindow({
		title:'デイリー記録画面',
		width:'100%',
		height:'100%',
		backgroundColor:'#fff'
	});
	
	var date = new Date();
	var rowcount = 10;
	var rows = [];
	for( var i=0 ; i<rowcount ; i++ )
	{
		var row =Ti.UI.createTableViewRow({
			height:100,
			className:'datarow',
			
		});
		
		var month = date.getMonth() + 1;
		var day = date.getDate();
	
		//! 日付
		var labDay = Ti.UI.createLabel({
			text:month+"月"+day+"日",
			top:'0%',
			left:'5%',
		});
		//! 回数
		var labCount = Ti.UI.createLabel({
			text:parseInt(Math.random()*10).toString() + "回",
			top:'50%',
			left:'5%',
		});
		
		row.add( labDay );
		row.add( labCount );
		
		date.setDate( day + 1 );
		rows.push( row );
	}
	
	var viewTable = Ti.UI.createTableView({
	    data:rows,
	});
	win.add( viewTable );
	
	return win;
}
module.exports = memory;
