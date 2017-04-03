// 表示するウィンドウのサイズ
var w_size=800;
var h_size=600;

// 表示するウィンドウの位置
var l_position=Number((window.screen.width-w_size)/2);
var t_position=Number((window.screen.height-h_size)/2);

//アドレスバーの非表示
function hideAdBar(){
 setTimeout(scrollTo,100,0,1);
 }
