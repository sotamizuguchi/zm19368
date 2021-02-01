function hyoji(){
  //表示する文字
  var str = "C-moon";
  //テキストボックスの文字の数
  var cnt = document.timer.moji.value.length;
  //文字が全部表示されているかを確認
  
  if(cnt < 6){
    //現在より1文字多く切り出して表示
    document.timer.moji.value=str.substr(0,cnt+1);}
    
  else{
    //全て表示されたら、空文字に戻す。
    document.timer.moji.value= "";}}

function startfnc(){
  //関数hyoji()を1000ミリ間隔で呼び出す
  setInterval("hyoji()",1000);}

function mes(){
  alert("3秒経過！");
}