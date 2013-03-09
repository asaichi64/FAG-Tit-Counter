// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//! カウンター画面
var Counter = require( 'ui/counter' );
var WinCounter = new Counter();
//! デイリー画面
var Memory = require( 'ui/memory' );
var WinMemory = new Memory();
//
// create base UI tab and root window
//
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'カウンター',
    window:WinCounter
});
//font:{fontSize:20,fontFamily:'Helvetica Neue'},

//
// create controls tab and root window
//
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'記録',
    window:WinMemory
});



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
