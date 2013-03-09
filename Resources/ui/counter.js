/**
 * @author Asaichi-Note00
 */
function counter()
{
	var number = 0;
	var win = Ti.UI.createWindow({
		title:'カウンター画面',
		width:'100%',
		height:'100%',
		backgroundColor:'#fff'
	});
	
	//! カウント部分
	var viewBody = Ti.UI.createView({
		width:'100%',
		height:'30%',
	});
		
	//! 数値テキスト
	var labNumber = Ti.UI.createLabel({
		text:number.toString(),
		top:0,
	});
	//! カウントボタン
	var buttonInc = Ti.UI.createButton({
		title:'+',
		width:80,
		height:80,
		top:30,
	});
	buttonInc.addEventListener( 'click', function(){
		//! +ボタンを押した時の処理
		++number;
		labNumber.text = number.toString();
	});
	viewBody.add( buttonInc );
	viewBody.add( labNumber );
	win.add( viewBody );
	
	return win;
}
module.exports = counter;
