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
	
	var rowcount = 10;
	var rows = [];
	for( var i=0 ; i<rowcount ; i++ )
	{
		var row =Ti.UI.createTableViewRow({
			height:100,
			className:'datarow',
			
		});
		
		rows.push( row );
	}
	
	var viewTable = Ti.UI.createTableView({
	    data:rows,
	});
	win.add( viewTable );
	
	return win;
}
module.exports = memory;
